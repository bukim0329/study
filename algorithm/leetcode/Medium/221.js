/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = matrix => {
  let max = Math.max(...matrix.flat());
  const dp = Array.from({ length: matrix.length }, (_, row) => [...matrix[row]]);
  for (let i = 1; i < matrix.length; i += 1) {
    for (let j = 1; j < matrix[0].length; j += 1) {
      if (dp[i][j] === '1' && dp[i - 1][j - 1] !== 0 && dp[i][j - 1] !== 0 && dp[i - 1][j] !== 0) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max * max;
};
