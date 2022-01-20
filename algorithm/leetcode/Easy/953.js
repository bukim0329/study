/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = function (words, order) {
  return words
    .slice()
    .sort((a, b) => {
      for (let i = 0; i < Math.min(a.length, b.length); i += 1) {
        const aInd = order.indexOf(a[i]);
        const bInd = order.indexOf(b[i]);
        if (aInd !== bInd) {
          return aInd - bInd;
        }
      }
      return a.length - b.length;
    })
    .every((word, ind) => word === words[ind]);
};
