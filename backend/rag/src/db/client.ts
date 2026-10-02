import pg from "pg";

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const SCHEMA_SQL = `
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS doc_chunks (
  id TEXT PRIMARY KEY,
  source_file TEXT NOT NULL,
  heading TEXT NOT NULL,
  content TEXT NOT NULL,
  embedding VECTOR(768) NOT NULL
);

CREATE INDEX IF NOT EXISTS doc_chunks_embedding_idx
  ON doc_chunks USING hnsw (embedding vector_cosine_ops);
`;