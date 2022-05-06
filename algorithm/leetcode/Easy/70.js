/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const DP = [1, 2, 3];
  for (let i = 3; i < n; i += 1) {
    DP[i] = DP[i - 2] + DP[i - 1];
  }
  return DP[n - 1];
};
