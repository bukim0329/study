/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0 && target !== matrix[row][col]) {
    if (target < matrix[row][col]) {
      col -= 1;
    } else {
      row += 1;
    }
  }
  return row < matrix.length && col >= 0 && target === matrix[row][col];
};
