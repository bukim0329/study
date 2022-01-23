/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSubsequence = function (nums, k) {
  return nums
    .map((val, ind) => [val, ind])
    .sort((a, b) => b[0] - a[0])
    .slice(0, k)
    .sort((a, b) => a[1] - b[1])
    .map(x => x[0]);
};
