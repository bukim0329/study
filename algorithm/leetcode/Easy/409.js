/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const hash = {};
  for (let i = 0; i < s.length; i += 1) {
    hash[s[i]] = (hash[s[i]] || 0) + 1;
  }
  const ans = Object.values(hash).reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc + cur - 1), 0);

  return ans < s.length ? ans + 1 : ans;
};
