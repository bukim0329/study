/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let i = 1;
  let n = 0;
  while (n < num) {
    n = i ** 2;
    i += 1;
  }
  return n === num;
};
