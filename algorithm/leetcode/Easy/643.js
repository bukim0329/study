/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  let sum = nums.slice(0, k).reduce((acc, cur) => acc + cur, 0);
  let max = sum;
  for (let i = 1; i < nums.length - k + 1; i += 1) {
    sum += nums[i + k - 1] - nums[i - 1];
    if (max < sum) {
      max = sum;
    }
  }
  return max / k;
};
