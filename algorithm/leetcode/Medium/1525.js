/**
 * @param {string} s
 * @return {number}
 */
const numSplits = function (s) {
  const left = new Map();
  const right = new Map();

  for (let i = 0; i < s.length; i += 1) {
    right.set(s[i], (right.get(s[i]) || 0) + 1);
  }

  let ans = 0;

  for (let i = 0; i < s.length; i += 1) {
    left.set(s[i], (left.get(s[i]) || 0) + 1);
    if (right.get(s[i]) === 1) {
      right.delete(s[i]);
    } else {
      right.set(s[i], right.get(s[i]) - 1);
    }
    if ([...left.values()].length === [...right.values()].length) {
      ans += 1;
    }
  }

  return ans;
};
