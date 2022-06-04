/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const words = new Set(wordDict);
  const wordLens = new Set(wordDict.map(word => word.length));
  const starts = new Set([0]);
  for (const start of starts) {
    for (const len of wordLens) {
      if (words.has(s.slice(start, start + len))) {
        starts.add(start + len);
      }
    }
  }
  return starts.has(s.length);
};
