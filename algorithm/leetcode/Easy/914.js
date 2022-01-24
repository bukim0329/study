/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function (deck) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const map = new Map();
  deck.forEach(val => {
    map.set(val, (map.get(val) || 0) + 1);
  });
  let res = 0;
  for (const val of map.values()) {
    res = gcd(res, val);
  }
  return res > 1;
};
