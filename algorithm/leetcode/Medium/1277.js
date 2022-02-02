/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (matrix) {
  let ans = 0;
  const dp = matrix;
  for (let r = 0; r < matrix.length; r += 1) {
    for (let c = 0; c < matrix[0].length; c += 1) {
      if (r > 0 && c > 0 && dp[r][c] === 1) {
        dp[r][c] = Math.min(dp[r - 1][c - 1], dp[r - 1][c], dp[r][c - 1]) + 1;
      }
      ans += dp[r][c];
    }
  }

  return ans;
};
