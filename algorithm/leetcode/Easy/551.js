/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i += 1) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  return (map.get('A') || 0) < 2 && !s.includes('LLL');
};
