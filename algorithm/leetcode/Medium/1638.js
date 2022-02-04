/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const countSubstrings = function (s, t) {
  let ans = 0;
  for (let len = 1; len <= Math.min(s.length, t.length); len += 1) {
    for (let sind = 0; sind < s.length - len + 1; sind += 1) {
      for (let tind = 0; tind < t.length - len + 1; tind += 1) {
        let diff = 0;
        for (let ind = 0; ind < len; ind += 1) {
          if (s[sind + ind] !== t[tind + ind]) {
            diff += 1;
          }
        }
        if (diff === 1) {
          ans += 1;
        }
      }
    }
  }
  return ans;
};
