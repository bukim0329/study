/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const tmp = matrix.map((line, r) => line.map((_, c) => matrix[matrix.length - 1 - c][r]));
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      matrix[i][j] = tmp[i][j];
    }
  }
};
