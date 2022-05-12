/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  const dp = [0, 1, 2];
  const helper = num => {
    if (dp[num]) {
      return;
    }
    dp[num] = 0;
    for (let i = 0; i < num; i += 1) {
      dp[num] += (dp[i] || 1) * (dp[num - i - 1] || 1);
    }
  };
  for (let i = 3; i <= n; i += 1) {
    helper(i);
  }

  return dp[n];
};
