/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
const divideString = function (s, k, fill) {
  const ans = [];
  for (let i = 0; i < s.length; i += k) {
    ans.push(s.slice(i, i + k));
  }
  if (ans[ans.length - 1].length < k) {
    ans[ans.length - 1] += fill.repeat(k - ans[ans.length - 1].length);
  }

  return ans;
};
