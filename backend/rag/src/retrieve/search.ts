import { pool } from "../db/client.js";
import { embedText } from "../ingest/embedder.js";
import type { RetrievedChunk } from "../types/index.js";

export async function retrieveRelevantChunks(
  question: string,
  topK: number = 5
): Promise<RetrievedChunk[]> {
  const queryVector = await embedText(question, "RETRIEVAL_QUERY");
  const vectorLiteral = `[${queryVector.join(",")}]`;

  const result = await pool.query(
    `SELECT id, source_file, heading, content,
            1 - (embedding <=> $1) AS similarity
     FROM doc_chunks
     ORDER BY embedding <=> $1
     LIMIT $2`,
    [vectorLiteral, topK]
  );

  return result.rows.map((row) => ({
    id: row.id,
    sourceFile: row.source_file,
    heading: row.heading,
    content: row.content,
    tokenCount: Math.ceil(row.content.length / 4),
    similarity: row.similarity,
  }));
}