/**
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function (s) {
  const ans = [];
  let start = 0;
  let end = -Infinity;
  for (let i = 0; i < s.length; i += 1) {
    end = Math.max(end, s.lastIndexOf(s[i]));
    if (end === i) {
      ans.push(i - start + 1);
      start = i + 1;
    }
  }
  return ans;
};
