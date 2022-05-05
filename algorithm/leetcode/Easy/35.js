/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if (nums[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return min;
};
