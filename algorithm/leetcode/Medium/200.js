/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = grid => {
  const visited = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }).fill(false));
  const dfs = (grid, row, col) => {
    visited[row][col] = true;
    grid[row][col] = '0';
    if (row + 1 < grid.length && !visited[row + 1][col] && grid[row + 1][col] === '1') {
      dfs(grid, row + 1, col);
    }
    if (row > 0 && !visited[row - 1][col] && grid[row - 1][col] === '1') {
      dfs(grid, row - 1, col);
    }
    if (col + 1 < grid[0].length && !visited[row][col + 1] && grid[row][col + 1] === '1') {
      dfs(grid, row, col + 1);
    }
    if (col > 0 && !visited[row][col - 1] && grid[row][col - 1] === '1') {
      dfs(grid, row, col - 1);
    }
  };
  let ans = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === '1') {
        dfs(grid, i, j);
        ans += 1;
      }
    }
  }

  return ans;
};
