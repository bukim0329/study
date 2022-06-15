/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > nums[start]) {
      if (target >= nums[start] && target < nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      if (target > nums[mid] && target <= nums[end]) start = mid + 1;
      else end = mid - 1;
    } else break;
  }
  return nums[end] === target ? end : -1;
};
