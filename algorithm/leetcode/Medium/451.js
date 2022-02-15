/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i += 1) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  const entries = [...map.entries()];
  entries.sort((a, b) => b[1] - a[1]);

  return entries.map(val => val[0].repeat(val[1])).join('');
};
