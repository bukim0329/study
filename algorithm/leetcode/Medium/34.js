/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < target) l = mid + 1;
    else r = mid;
  }
  if (nums[l] !== target) return [-1, -1];
  const start = l;
  r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > target) r = mid;
    else l = mid + 1;
  }
  const end = nums[l] === target ? l : l - 1;
  return [start, end];
};
