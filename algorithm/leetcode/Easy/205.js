/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const obj = {};
  for (let i = 0; i < s.length; i += 1) {
    if (!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
    if (!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
    if (obj['s' + s[i]] !== t[i] || obj['t' + t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};
