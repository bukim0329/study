/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col > -1) {
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] < target) row += 1;
    else col -= 1;
  }

  return false;
};
