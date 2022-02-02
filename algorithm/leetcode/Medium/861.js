/**
 * @param {number[][]} grid
 * @return {number}
 */
const matrixScore = function (grid) {
  const tmp = grid.map(row => {
    if (row[0] !== 1) {
      return row.map(val => (val === 1 ? 0 : 1));
    }
    return row;
  });
  for (let i = 0; i < grid[0].length; i += 1) {
    let num = 0;
    for (let j = 0; j < grid.length; j += 1) {
      if (tmp[j][i] === 1) {
        num += 1;
      }
    }
    if (num < grid.length / 2) {
      for (let j = 0; j < grid.length; j += 1) {
        tmp[j][i] = tmp[j][i] === 1 ? 0 : 1;
      }
    }
  }
  return tmp.reduce((acc, bin) => acc + parseInt(bin.join(''), 2), 0);
};
