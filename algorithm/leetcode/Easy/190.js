/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  return n
    .toString(2)
    .padStart(32, '0')
    .split('')
    .reduce((acc, cur, ind) => acc + cur * 2 ** ind, 0);
};
