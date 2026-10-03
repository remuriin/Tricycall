import { pool } from "../db/client.js";
import type { EmbeddedChunk } from "../types/index.js";

export async function replaceFileChunks(
  sourceFile: string,
  chunks: EmbeddedChunk[]
): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("DELETE FROM doc_chunks WHERE source_file = $1", [sourceFile]);

    for (const chunk of chunks) {
      await client.query(
        `INSERT INTO doc_chunks (id, source_file, heading, content, embedding)
         VALUES ($1, $2, $3, $4, $5)`,
        [chunk.id, chunk.sourceFile, chunk.heading, chunk.content, toVectorLiteral(chunk.embedding)]
      );
    }

    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}

export async function deleteMissingFiles(currentFiles: string[]): Promise<void> {
  await pool.query("DELETE FROM doc_chunks WHERE source_file <> ALL($1::text[])", [currentFiles]);
}

function toVectorLiteral(vec: number[]): string {
  return `[${vec.join(",")}]`;
}