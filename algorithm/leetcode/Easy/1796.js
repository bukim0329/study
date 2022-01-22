/**
 * @param {string} s
 * @return {number}
 */
const secondHighest = function (s) {
  return [...new Set(s.match(/[0-9]/g))].sort((a, b) => b - a)[1] || -1;
};
