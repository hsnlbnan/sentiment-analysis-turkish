export interface SentimentResult {
  score: number;
  comparative: number;
  words: string[];
  positive: string[];
  negative: string[];
}

export interface Dictionary {
  [key: string]: number;
}
