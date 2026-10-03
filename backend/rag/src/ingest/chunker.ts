import { readFileSync } from "fs";
import type { DocChunk } from "../types/index.js";

const MAX_CHARS = 1800; // ~ 400-500 tokens, rough char-to-token ratio

export function chunkMarkdownFile(filePath: string, sourceFile: string): DocChunk[] {
  const raw = readFileSync(filePath, "utf-8");
  const sections = splitByHeading(raw);

  const chunks: DocChunk[] = [];
  let idx = 0;

  for (const section of sections) {
    const pieces = splitIfTooLong(section.content, MAX_CHARS);
    for (const piece of pieces) {
      const trimmed = piece.trim();
      if (!trimmed) continue; // skip empty/whitespace-only chunks
      
      chunks.push({
        id: `${sourceFile}-${idx++}`,
        sourceFile,
        heading: section.heading,
        content: piece.trim(),
        tokenCount: Math.ceil(piece.length / 4), // rough estimate
      });
    }
  }
  return chunks;
}

function splitByHeading(markdown: string): { heading: string; content: string }[] {
  const lines = markdown.split("\n");
  const sections: { heading: string; content: string }[] = [];
  let currentHeading = "Introduction";
  let buffer: string[] = [];

  for (const line of lines) {
    const match = line.match(/^#{1,3}\s+(.*)/);
    if (match) {
      if (buffer.length) sections.push({ heading: currentHeading, content: buffer.join("\n") });
      currentHeading = match[1];
      buffer = [];
    } else {
      buffer.push(line);
    }
  }
  if (buffer.length) sections.push({ heading: currentHeading, content: buffer.join("\n") });
  return sections;
}

function splitIfTooLong(content: string, maxChars: number): string[] {
  if (content.length <= maxChars) return [content];
  const parts: string[] = [];
  let remaining = content;
  while (remaining.length > maxChars) {
    let cut = remaining.lastIndexOf("\n\n", maxChars);
    if (cut <= 0) cut = maxChars;
    parts.push(remaining.slice(0, cut));
    remaining = remaining.slice(cut);
  }
  if (remaining.trim()) parts.push(remaining);
  return parts;
}