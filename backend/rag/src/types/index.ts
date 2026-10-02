export interface DocChunk {
  id: string;
  sourceFile: string;
  heading: string;
  content: string;
  tokenCount: number;
}

export interface EmbeddedChunk extends DocChunk {
  embedding: number[];
}

export interface RetrievedChunk extends DocChunk {
  similarity: number;
}

export interface RagAnswer {
  answer: string;
  sources: { sourceFile: string; heading: string }[];
}