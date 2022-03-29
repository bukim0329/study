/**
 * @param {number[][]} grid
 * @return {number}
 */
const numEnclaves = function (grid) {
  const dfs = (row, col) => {
    grid[row][col] = 0;
    if (row > 0 && grid[row - 1][col] === 1) {
      dfs(row - 1, col);
    }
    if (row < grid.length - 1 && grid[row + 1][col] === 1) {
      dfs(row + 1, col);
    }
    if (col > 0 && grid[row][col - 1] === 1) {
      dfs(row, col - 1);
    }
    if (col < grid[0].length - 1 && grid[row][col + 1] === 1) {
      dfs(row, col + 1);
    }
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 1 && (i === 0 || i === grid.length - 1 || j === 0 || j === grid[0].length - 1)) {
        dfs(i, j);
      }
    }
  }
  return grid.reduce((sum, arr) => sum + arr.reduce((acc, cur) => acc + cur, 0), 0);
};
