/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  const arr = Array.from({ length: n }, () => []);
  const fill = (startRow, startCol, startNum, num) => {
    if (num === 0) {
      arr[startRow][startCol] = startNum;
    }
    for (let i = 0; i < num; i += 1) {
      arr[startRow][startCol + i] = startNum;
      startNum += 1;
    }
    for (let i = 0; i < num; i += 1) {
      arr[startRow + i][startCol + num] = startNum;
      startNum += 1;
    }
    for (let i = 0; i < num; i += 1) {
      arr[startRow + num][startCol + num - i] = startNum;
      startNum += 1;
    }
    for (let i = 0; i < num; i += 1) {
      arr[startRow + num - i][startCol] = startNum;
      startNum += 1;
    }
    return startNum;
  };
  let startNum = 1;
  for (let i = 0; i < Math.ceil(n / 2); i += 1) {
    startNum = fill(i, i, startNum, n - i * 2 - 1);
  }

  return arr;
};
