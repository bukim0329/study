/**
 * @param {number} n
 * @return {string[]}
 */
const simplifiedFractions = function (n) {
  const ans = [];
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  for (let i = 1; i < n; i += 1) {
    for (let j = i + 1; j <= n; j += 1) {
      if (i === 1 || gcd(j, i) === 1) {
        ans.push(`${i}/${j}`);
      }
    }
  }

  return ans;
};
