/**
 * @param {number[][]} matrix
 * @return {number}
 */
const largestSubmatrix = function (matrix) {
  const x = matrix[0].length;
  const y = matrix.length;
  let ans = 0;
  for (let i = 1; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (matrix[i][j]) matrix[i][j] += matrix[i - 1][j];
    }
  }
  for (let i = 0; i < y; i++) {
    const row = matrix[i].sort((a, b) => b - a);
    for (let j = 0; j < x; j++) {
      ans = Math.max(ans, (j + 1) * row[j]);
    }
  }
  return ans;
};
