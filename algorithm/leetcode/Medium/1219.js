/**
 * @param {number[][]} grid
 * @return {number}
 */
const getMaximumGold = function (grid) {
  let ans = 0;
  const visited = Array.from({ length: grid.length }, () => new Array(grid[0].length).fill(false));
  const rec = (r, c, grid, visited, sum) => {
    if (grid[r][c] === 0 || visited[r][c] === true) {
      return;
    }
    sum += grid[r][c];
    ans = Math.max(ans, sum);
    visited[r][c] = true;
    if (r < grid.length - 1) {
      rec(r + 1, c, grid, visited, sum);
    }
    if (r > 0) {
      rec(r - 1, c, grid, visited, sum);
    }
    if (c < grid[0].length - 1) {
      rec(r, c + 1, grid, visited, sum);
    }
    if (c > 0) {
      rec(r, c - 1, grid, visited, sum);
    }
    visited[r][c] = false;
  };
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] !== 0) {
        rec(i, j, grid, visited, 0);
      }
    }
  }
  return ans;
};
