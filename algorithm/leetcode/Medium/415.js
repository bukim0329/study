/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = nums => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2 === 1) {
    return false;
  }
  const half = sum / 2;
  const dp = Array.from({ length: half + 1 }, () => false);
  dp[0] = true;
  nums.forEach(val => {
    for (let i = half; i >= val; i -= 1) {
      dp[i] = dp[i] || dp[i - val];
    }
  });

  return dp[half];
};
