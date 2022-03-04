/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  let ans = 0;
  const iter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      ans += 1;
      left -= 1;
      right += 1;
    }
  };
  for (let i = 0; i < s.length; i += 1) {
    iter(i, i);
    iter(i, i + 1);
  }

  return ans;
};
