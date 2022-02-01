/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const findAndReplacePattern = function (words, pattern) {
  return words.filter(word => {
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < word.length; i += 1) {
      map1.set(pattern[i], word[i]);
      map2.set(word[i], pattern[i]);
    }
    let tmp1 = '';
    let tmp2 = '';
    for (let i = 0; i < pattern.length; i += 1) {
      tmp1 += map1.get(pattern[i]);
      tmp2 += map2.get(word[i]);
    }
    return !!(tmp1 === word && tmp2 === pattern);
  });
};
