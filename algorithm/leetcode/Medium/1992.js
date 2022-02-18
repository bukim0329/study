/**
 * @param {number[][]} land
 * @return {number[][]}
 */
const findFarmland = function (land) {
  const ans = [];
  const flag = Array.from({ length: land.length }, () => new Array(land[0].length).fill(false));
  for (let r = 0; r < land.length; r += 1) {
    for (let c = 0; c < land[0].length; c += 1) {
      if (!flag[r][c] && land[r][c] === 1) {
        const coor = [r, c];
        const stack = [[r, c]];
        let rc;
        while (stack.length > 0) {
          const [lr, lc] = stack.shift();
          if (land[lr][lc] === 1) {
            if (lr < land.length - 1 && !flag[lr + 1][lc]) {
              stack.push([lr + 1, lc]);
              flag[lr + 1][lc] = true;
            }
            if (lc < land[0].length - 1 && !flag[lr][lc + 1]) {
              stack.push([lr, lc + 1]);
              flag[lr][lc + 1] = true;
            }
            rc = [lr, lc];
          }
        }
        ans.push([...coor, ...rc]);
      }
    }
  }

  return ans;
};
