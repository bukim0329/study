/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = function (grid) {
  return grid
    .map((line, row) =>
      line.map((height, col) => {
        const arr = [];
        for (let i = 0; i < grid.length; i += 1) {
          arr.push(grid[i][col]);
        }
        return Math.min(Math.max(...line), Math.max(...arr)) - grid[row][col];
      })
    )
    .reduce((sum, line) => sum + line.reduce((acc, cur) => acc + cur, 0), 0);
};
