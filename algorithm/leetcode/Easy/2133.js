/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const checkValid = function (matrix) {
  const num = matrix.length;
  for (let i = 0; i < num; i += 1) {
    const row = new Set();
    const col = new Set();
    for (let j = 0; j < num; j += 1) {
      row.add(matrix[i][j]);
      col.add(matrix[j][i]);
    }
    if (row.size !== num || col.size !== num) {
      return false;
    }
  }

  return true;
};
