/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function (s, t) {
  const map = new Map();
  for (let i = 0; i < s.length; i += 1) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    map.set(t[i], (map.get(t[i]) || 0) - 1);
  }
  return [...map.values()].reduce((acc, cur) => {
    if (cur > 0) {
      return acc + cur;
    }
    return acc;
  }, 0);
};
