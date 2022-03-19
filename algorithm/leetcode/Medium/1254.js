/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function (grid) {
  const dfs = (i, j) => {
    const stack = [[i, j]];
    let flag = 0;
    while (stack.length > 0) {
      const [ti, tj] = stack.pop();
      grid[ti][tj] = 1;
      if (ti === 0 || tj === 0 || ti === grid.length - 1 || tj === grid[0].length - 1) {
        flag = 1;
      }
      if (ti < grid.length - 1 && grid[ti + 1][tj] === 0) {
        stack.push([ti + 1, tj]);
      }
      if (ti > 0 && grid[ti - 1][tj] === 0) {
        stack.push([ti - 1, tj]);
      }
      if (tj < grid[0].length - 1 && grid[ti][tj + 1] === 0) {
        stack.push([ti, tj + 1]);
      }
      if (tj > 0 && grid[ti][tj - 1] === 0) {
        stack.push([ti, tj - 1]);
      }
    }
    return flag !== 1;
  };
  let ans = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 0 && dfs(i, j)) {
        ans += 1;
      }
    }
  }

  return ans;
};
