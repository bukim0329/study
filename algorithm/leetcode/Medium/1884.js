/**
 * @param {number} n
 * @return {number}
 */
const twoEggDrop = function (n) {
  let i = 0;
  while (n > 0) {
    i += 1;
    n -= i;
  }
  return i;
};
