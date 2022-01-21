/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = function (s) {
  const ans = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[start] === s[i]) {
      end = i;
    } else {
      if (end - start > 1) {
        ans.push([start, end]);
      }
      start = i;
      end = i;
    }
  }
  if (s.length - start > 2) {
    ans.push([start, s.length - 1]);
  }

  return ans;
};
