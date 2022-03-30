/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthLargestValue = function (matrix, k) {
  const arr = Array.from({ length: matrix.length }, () => Array(matrix[0].length));
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      if (i === 0 && j === 0) {
        arr[i][j] = matrix[i][j];
      } else if (i === 0) {
        arr[i][j] = arr[i][j - 1] ^ matrix[i][j];
      } else if (j === 0) {
        arr[i][j] = arr[i - 1][j] ^ matrix[i][j];
      } else {
        arr[i][j] = arr[i - 1][j] ^ arr[i][j - 1] ^ arr[i - 1][j - 1] ^ matrix[i][j];
      }
    }
  }
  return arr.flat().sort((a, b) => b - a)[k - 1];
};
