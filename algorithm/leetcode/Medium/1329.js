/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const diagonalSort = function (mat) {
  const map = new Map();
  mat.forEach((line, row) =>
    line.forEach((val, col) => {
      const tmp = map.get(row - col) || [];
      tmp.push(val);
      map.set(row - col, tmp);
    })
  );
  return Array.from(Array(mat.length), () => Array(mat[0].length).fill(0)).map((line, row) =>
    line.map((_, col) => {
      const arr = map.get(row - col);
      const min = Math.min(...arr);
      return arr.splice(arr.indexOf(min), 1);
    })
  );
};
