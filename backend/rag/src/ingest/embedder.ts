import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const EMBED_MODEL = "gemini-embedding-001";
const DIMENSIONS = 768; // matches the pgvector column width

export type EmbedTaskType = "RETRIEVAL_DOCUMENT" | "RETRIEVAL_QUERY";

export async function embedText(text: string, taskType: EmbedTaskType): Promise<number[]> {
  const result = await ai.models.embedContent({
    model: EMBED_MODEL,
    contents: text,
    config: {
      taskType,
      outputDimensionality: DIMENSIONS,
    },
  });

  const raw = result.embeddings![0].values!;
  return DIMENSIONS === 3072 ? raw : l2Normalize(raw);
}

export async function embedBatch(texts: string[], taskType: EmbedTaskType): Promise<number[][]> {
  // gemini-embedding-001 processes one request at a time in the public API;
  // run sequentially with a small delay to stay under free-tier RPM.
  const out: number[][] = [];
  for (const text of texts) {
    out.push(await embedText(text, taskType));
    await new Promise((r) => setTimeout(r, 250));
  }
  return out;
}

function l2Normalize(vector: number[]): number[] {
  const magnitude = Math.sqrt(vector.reduce((sum, v) => sum + v * v, 0));
  return magnitude === 0 ? vector : vector.map((v) => v / magnitude);
}