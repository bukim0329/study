/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
  if (n < 0) {
    return false;
  }
  let num = 1;
  while (num < n) {
    num *= 4;
  }
  return num === n;
};
