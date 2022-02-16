/**
 * @param {number[][]} matrix
 * @return {number}
 */
const minFallingPathSum = function (matrix) {
  const dp = [matrix[0], ...Array.from({ length: matrix.length - 1 }, () => [])];
  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      const min = Math.min(dp[i - 1][j - 1] || Infinity, dp[i - 1][j], dp[i - 1][j + 1] || Infinity);
      dp[i][j] = min + matrix[i][j];
    }
  }
  return Math.min(...dp[matrix.length - 1]);
};
