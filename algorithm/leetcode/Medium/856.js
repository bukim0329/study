/**
 * @param {string} s
 * @return {number}
 */
const scoreOfParentheses = function (s) {
  let ans = 0;
  let depth = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      depth += 1;
    } else if (s[i - 1] === '(') {
      depth -= 1;
      ans += 1 << depth;
    } else {
      depth -= 1;
    }
  }
  return ans;
};
