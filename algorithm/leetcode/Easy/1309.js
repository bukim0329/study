/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = function (s) {
  const ans = [];
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    if (s[i] === '#') {
      ans.push(Number(s[i - 2] + s[i - 1]));
      i -= 2;
    } else {
      ans.push(Number(s[i]));
    }
  }
  return ans
    .reverse()
    .map(val => alpha[val - 1])
    .join('');
};
