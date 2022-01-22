/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  const dp = [];
  nums.forEach((val, ind) => {
    dp[ind] = (dp[ind - 1] || 0) > 0 ? (dp[ind - 1] || 0) + val : val;
  });

  return Math.max(...dp);
};
