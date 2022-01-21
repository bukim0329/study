/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function (g, s) {
  let gInd = 0;
  let sInd = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (gInd < g.length && sInd < s.length) {
    if (g[gInd] <= s[sInd]) {
      gInd += 1;
    }
    sInd += 1;
  }

  return gInd;
};
