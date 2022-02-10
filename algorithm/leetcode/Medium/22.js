/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const ans = [];
  const comb = (ret, left, right) => {
    if (left > right) {
      return;
    }
    if (left === 0 && right === 0) {
      ans.push(ret);
    } else {
      for (let i = 1; i <= left; i += 1) {
        ret += '(';
        for (let j = 1; j <= right; j += 1) {
          comb(ret + ')'.repeat(j), left - i, right - j);
        }
      }
    }
  };
  comb('', n, n);
  return ans;
};
