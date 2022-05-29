/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
  if (nums.length <= 2) {
    return Math.max(...nums);
  }
  const dp = [nums[0], nums[1]];
  for (let i = 2; i < nums.length; i += 1) {
    dp[i] = nums[i] + Math.max(dp[i - 2], dp[i - 3] || 0);
  }
  return Math.max(dp[nums.length - 2], dp[nums.length - 1]);
};
