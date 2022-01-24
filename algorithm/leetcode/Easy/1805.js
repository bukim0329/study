/**
 * @param {string} word
 * @return {number}
 */
const numDifferentIntegers = function (word) {
  return new Set(
    (word.match(/[0-9]{1,}/g) || []).map(val => {
      let i = 0;
      while (val[i] === '0') {
        i += 1;
      }
      return val.slice(i);
    })
  ).size;
};
