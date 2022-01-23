/**
 * @param {number[]} nums
 * @return {boolean}
 */
const check = function (nums) {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[0] >= nums[nums.length - 1]) {
      nums.push(nums.shift());
    }
  }
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] < nums[i - 1]) {
      return false;
    }
  }

  return true;
};
