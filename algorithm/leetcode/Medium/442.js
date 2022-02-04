/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
  const ans = [];
  nums.unshift(0);
  for (let i = 0; i < nums.length; i += 1) {
    const idx = Math.abs(nums[i]);
    if (nums[idx] < 0) {
      ans.push(idx);
    }
    nums[idx] *= -1;
  }
  return ans;
};
