/**
 * @param {number} n
 * @return {boolean}
 */
const reorderedPowerOf2 = function (n) {
  const len = String(n).length;
  const nums = String(n)
    .split('')
    .sort((a, b) => a - b);
  let num = 1;
  while (len >= String(num).length) {
    if (String(num).length === len) {
      if (
        String(num)
          .split('')
          .sort((a, b) => a - b)
          .every((num, ind) => num === nums[ind])
      ) {
        return true;
      }
    }
    num *= 2;
  }

  return false;
};
