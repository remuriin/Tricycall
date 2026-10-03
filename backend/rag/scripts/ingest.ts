import "dotenv/config";
import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { pool, SCHEMA_SQL } from "../src/db/client.js";
import { chunkMarkdownFile } from "../src/ingest/chunker.js";
import { embedBatch } from "../src/ingest/embedder.js";
import { replaceFileChunks, deleteMissingFiles } from "../src/ingest/store.js";
import type { EmbeddedChunk } from "../src/types/index.js";

const DOCS_DIR = join(process.cwd(), "docs");

async function main() {
  if (!existsSync(DOCS_DIR)) {
    throw new Error(`docs folder not found at ${DOCS_DIR}`);
  }
  const files = readdirSync(DOCS_DIR).filter((f) => f.endsWith(".md"));
  if (files.length === 0) {
    throw new Error("No .md files found in docs/");
  }

  await pool.query(SCHEMA_SQL);
  console.log(`Found ${files.length} doc files.`);

  for (const file of files) {
    const chunks = chunkMarkdownFile(join(DOCS_DIR, file), file);
    console.log(`  ${file} -> ${chunks.length} chunks`);

    const vectors = await embedBatch(
      chunks.map((c) => `${c.heading}\n${c.content}`),
      "RETRIEVAL_DOCUMENT"
    );
    const embedded: EmbeddedChunk[] = chunks.map((c, i) => ({ ...c, embedding: vectors[i] }));

    await replaceFileChunks(file, embedded);
  }

  await deleteMissingFiles(files);
  console.log("Ingest complete.");
}

main()
  .catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exitCode = 1;
  })
  .finally(() => pool.end());