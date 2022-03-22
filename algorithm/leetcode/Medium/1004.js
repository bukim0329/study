/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      k -= 1;
    }
    if (k < 0) {
      if (nums[left] === 0) {
        k += 1;
      }
      left += 1;
    }
    right += 1;
  }

  return right - left;
};
