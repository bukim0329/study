/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  const ans = [0];
  const dfs = (r, c, grid) => {
    let ret = 0;
    if (grid[r][c] === 1) {
      ret += 1;
      grid[r][c] = -1;
      if (r + 1 < grid.length) {
        ret += dfs(r + 1, c, grid);
      }
      if (c + 1 < grid[0].length) {
        ret += dfs(r, c + 1, grid);
      }
      if (r - 1 >= 0) {
        ret += dfs(r - 1, c, grid);
      }
      if (c - 1 >= 0) {
        ret += dfs(r, c - 1, grid);
      }
    }
    return ret;
  };
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 1) {
        ans.push(dfs(i, j, grid));
      }
    }
  }
  return Math.max(...ans);
};
