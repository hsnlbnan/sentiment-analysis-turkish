const findSentiment = require("./app");

test("sentiment analysis test", () => {
  const sentence = "Bu ürüne aşığım!";
  const result = findSentiment(sentence);

  expect(result.score).toBeGreaterThan(0);
  expect(result.comparative).toBeGreaterThan(0);
  expect(result.words).toContain("aşığım");
  expect(result.positive).toContain("aşığım");
  expect(result.negative).toHaveLength(0);
});

test("sentiment analysis with injection", () => {
  const sentence = "Bu ürünü çok seviyorum!";
  const inject = { love: 5 };
  const result = findSentiment(sentence, inject);

  expect(result.score).toBeGreaterThan(0);
  expect(result.comparative).toBeGreaterThan(0);
  expect(result.words).toContain("seviyorum");
  expect(result.positive).toContain("seviyorum");
  expect(result.negative).toHaveLength(0);
});

test("sentiment analysis with callback", (done) => {
  const sentence = "Bu üründen nefret ediyorum!";
  const callback = (
    err: any,
    result: {
      score: any;
      comparative: any;
      words: any;
      negative: any;
      positive: any;
    }
  ) => {
    expect(result.score).toBeLessThan(0);
    expect(result.comparative).toBeLessThan(0);
    expect(result.words).toContain("nefret");
    expect(result.negative).toContain("nefret");
    expect(result.positive).toHaveLength(0);
    done();
  };

  findSentiment(sentence, null, callback);
});

test("findSentiment with empty sentence", () => {
  expect(findSentiment("")).toEqual({
    score: 0,
    comparative: 0,
    words: [],
    positive: [],
    negative: [],
  });
});

test("findSentiment with positive sentence", () => {
  expect(findSentiment("Sınavda başarılı olmana sevindim!")).toEqual({
    score: 3,
    comparative: 0.6,
    words: ["başarılı"],
    positive: ["başarılı"],
    negative: [],
  });
});

test("findSentiment with negative sentence", () => {
  expect(findSentiment("Sınavda başarısız olmana üzüldüm.")).toEqual({
    score: -2,
    comparative: -0.4,
    words: ["başarısız"],
    positive: [],
    negative: ["başarısız"],
  });
});
