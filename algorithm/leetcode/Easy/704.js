/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let minInd = 0;
  let maxInd = nums.length - 1;
  while (maxInd >= minInd) {
    const mid = Math.floor((minInd + maxInd) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      maxInd = mid - 1;
    } else {
      minInd = mid + 1;
    }
  }
  return -1;
};
