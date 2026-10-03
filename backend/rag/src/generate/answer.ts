import { GoogleGenAI } from "@google/genai";
import type { RetrievedChunk, RagAnswer } from "../types/index.js";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const CHAT_MODEL = "gemini-3.8-flash";

const SIMILARITY_FLOOR = 0.65;

export async function generateAnswer(
  question: string,
  chunks: RetrievedChunk[]
): Promise<RagAnswer> {
  const usable = chunks.filter((c) => c.similarity >= SIMILARITY_FLOOR);

  if (usable.length === 0) {
    return {
      answer: "I don't have information about that in Tricycall's docs yet. Try asking something about fares, cancellations, safety, or driver verification.",
      sources: [],
    };
  }

  const context = usable
    .map((c, i) => `[${i + 1}] (${c.sourceFile} — ${c.heading})\n${c.content}`)
    .join("\n\n");

  const prompt = `You are the Tricycall support assistant. Answer the user's question using ONLY the context below. If the context doesn't fully answer it, say what's missing instead of guessing.

Context:
${context}

Question: ${question}

Answer concisely. Reference sources by their [number] when relevant.`;

  const result = await ai.models.generateContent({
    model: CHAT_MODEL,
    contents: prompt,
  });

  return {
    answer: result.text ?? "",
    sources: usable.map((c) => ({ sourceFile: c.sourceFile, heading: c.heading })),
  };
}