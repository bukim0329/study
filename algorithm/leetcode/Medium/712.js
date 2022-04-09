/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumDeleteSum = function (s1, s2) {
  const dp = Array.from({ length: s1.length + 1 }, () => Array.from({ length: s2.length + 1 }).fill(0));

  for (let i = 1; i <= s1.length; i += 1) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }
  for (let i = 1; i <= s2.length; i += 1) {
    dp[0][i] = dp[0][i - 1] + s2.charCodeAt(i - 1);
  }
  for (let i = 1; i <= s1.length; i += 1) {
    for (let j = 1; j <= s2.length; j += 1) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j] + s1.charCodeAt(i - 1), dp[i][j - 1] + s2.charCodeAt(j - 1));
      }
    }
  }
  return dp[s1.length][s2.length];
};
