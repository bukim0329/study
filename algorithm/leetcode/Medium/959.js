/**
 * @param {string[]} grid
 * @return {number}
 */
const regionsBySlashes = function (grid) {
  const pixel = Array.from({ length: grid.length * 3 }, () => []);
  const dfs = (arr, r, c) => {
    if (arr[r][c] === 0) {
      arr[r][c] = 1;
      if (r > 0) {
        dfs(arr, r - 1, c);
      }
      if (r < arr.length - 1) {
        dfs(arr, r + 1, c);
      }
      if (c > 0) {
        dfs(arr, r, c - 1);
      }
      if (c < arr.length - 1) {
        dfs(arr, r, c + 1);
      }
    }
  };
  for (let i = 0; i < grid.length * 3; i += 1) {
    for (let j = 0; j < grid.length * 3; j += 1) {
      const slash = grid[Math.floor(i / 3)][Math.floor(j / 3)];
      if (slash === '/') {
        if ((i % 3) + (j % 3) === 2) {
          pixel[i][j] = 1;
        } else {
          pixel[i][j] = 0;
        }
      } else if (slash === '\\') {
        if (i % 3 === j % 3) {
          pixel[i][j] = 1;
        } else {
          pixel[i][j] = 0;
        }
      } else {
        pixel[i][j] = 0;
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < pixel.length; i += 1) {
    for (let j = 0; j < pixel.length; j += 1) {
      if (pixel[i][j] === 0) {
        ans += 1;
        dfs(pixel, i, j);
      }
    }
  }
  return ans;
};
