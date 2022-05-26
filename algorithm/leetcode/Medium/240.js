/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let i = 0;
  let j = matrix[0].length - 1;

  while (i <= matrix.length - 1 && j >= 0) {
    if (matrix[i][j] > target) {
      j -= 1;
    } else if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      i += 1;
    }
  }
  return false;
};
