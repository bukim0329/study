/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function (n) {
  if (n < 0) {
    return false;
  }
  let num = 1;
  while (num < n) {
    num *= 3;
  }
  return num === n;
};
