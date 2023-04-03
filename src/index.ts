let dictionary = require("../src/dictionary.json");
let { negativeVerbs } = require("./constants");
let { formatter } = require("./utils");

interface SentimentResult {
  score: number;
  comparative: number;
  words: string[];
  positive: string[];
  negative: string[];
}

type InjectType = Record<string, number>;

function findSentiment(
  sentence: string = "",
  inject: InjectType | null = null,
  callback: ((err: Error | null, result: SentimentResult) => void) | null = null
): SentimentResult | void {
  inject && Object.assign(dictionary, inject);

  const tokens: string[] = formatter(sentence) as string[];

  const score = tokens
    .map((token) => dictionary[token] || 0)
    .reduce((total, item, i) => {
      if (i > 0 && negativeVerbs[tokens[i - 1]]) item = -item;
      return total + item;
    }, 0);

  const words = tokens.filter((token) => token in dictionary);
  const positive = words.filter((token) => dictionary[token] > 0);
  const negative = words.filter((token) => dictionary[token] < 0);

  const result: SentimentResult = {
    score,
    comparative: tokens.length > 0 ? score / tokens.length : 0,
    words,
    positive,
    negative,
  };

  if (callback === null) {
    return result;
  } else {
    process.nextTick(() => {
      callback(null, result);
    });
  }
}

export { findSentiment };
