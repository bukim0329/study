/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const DP = [-Infinity];
  nums.forEach((val, ind) => {
    DP[ind + 1] = Math.max(DP[ind] + val, val);
  });
  return Math.max(...DP);
};
