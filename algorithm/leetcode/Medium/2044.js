/**
 * @param {number[]} nums
 * @return {number}
 */
const countMaxOrSubsets = function (nums) {
  const max = nums.reduce((acc, cur) => acc | cur, 0);
  const comb = (nums, max, prev) => {
    let ret = 0;
    for (let i = 0; i < nums.length; i += 1) {
      const res = prev | nums[i];
      if (res === max) {
        ret += 1;
      }
      ret += comb(nums.slice(i + 1), max, res);
    }
    return ret;
  };
  return comb(nums, max, 0);
};
