/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  let ans = 1;
  for (let i = 1; i <= Math.min(m - 1, n - 1); i += 1) {
    ans *= m + n - 1 - i;
    ans /= i;
  }
  return ans;
};
