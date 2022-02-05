/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
 const removeOccurrences = function(s, part) {
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === part[0]) {
      let len = 0;
      for (; len < part.length; len += 1) {
        if (s[i + len] !== part[len]) {
          break;
        }
      }
      if (len === part.length) {
        s = s.slice(0, i) + s.slice(i + len);
        i -= len;
      }
    }
  }
  return s;
};