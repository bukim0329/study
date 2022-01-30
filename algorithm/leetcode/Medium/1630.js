/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
const checkArithmeticSubarrays = function (nums, l, r) {
  return l.map((_, ind) => {
    const tmp = nums.slice(l[ind], r[ind] + 1).sort((a, b) => a - b);
    for (let i = 2; i < tmp.length; i += 1) {
      if (tmp[i] - tmp[i - 1] !== tmp[i - 1] - tmp[i - 2]) {
        return false;
      }
    }
    return true;
  });
};
