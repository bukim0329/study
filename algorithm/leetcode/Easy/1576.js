/**
 * @param {string} s
 * @return {string}
 */
const modifyString = function (s) {
  const index = 'abc';
  const ans = s.split('');
  for (let i = 0; i < ans.length; i += 1) {
    if (ans[i] === '?') {
      for (let j = 0; j < index.length; j += 1) {
        if (ans[i - 1] !== index[j] && ans[i + 1] !== index[j]) {
          ans[i] = index[j];
        }
      }
    }
  }

  return ans.join('');
};
