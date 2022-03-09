/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const canConstruct = function (s, k) {
  const map = new Map();
  for (let i = 0; i < s.length; i += 1) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  const odd = [...map.values()].reduce((acc, cur) => (cur % 2 === 0 ? acc : acc + 1), 0);

  return s.length >= k && odd <= k;
};
