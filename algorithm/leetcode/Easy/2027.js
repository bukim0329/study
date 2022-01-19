/**
 * @param {string} s
 * @return {number}
 */
const minimumMoves = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'X') {
      i += 2;
      ans += 1;
    }
  }

  return ans;
};
