/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  const sArr = [];
  const gArr = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== goal[i]) {
      sArr.push(s[i]);
      gArr.push(goal[i]);
    }
  }
  if (sArr.length === 0) {
    return new Set(s).size !== s.length;
  }
  return sArr.length === 2 && sArr.reverse().join('') === gArr.join('');
};
