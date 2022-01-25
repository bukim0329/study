/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = function (words1, words2) {
  const map1 = new Map();
  const map2 = new Map();
  words1.forEach(word => map1.set(word, (map1.get(word) || 0) + 1));
  words2.forEach(word => map2.set(word, (map2.get(word) || 0) + 1));
  const set1 = [...map1.entries()].filter(entry => entry[1] === 1).map(entry => entry[0]);
  const set2 = [...map2.entries()].filter(entry => entry[1] === 1).map(entry => entry[0]);

  return set1.filter(word => set2.includes(word)).length;
};
