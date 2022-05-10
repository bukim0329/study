/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    if (map.get(nums[i])) {
      return nums[i];
    }
    map.set(nums[i], true);
  }
};
