/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
  const patMap = new Map();
  const patArr = pattern.split('');
  const sArr = s.split(' ');
  if (patArr.length !== sArr.length) {
    return false;
  }
  if (new Set(patArr).size !== new Set(sArr).size) {
    return false;
  }
  for (let i = 0; i < pattern.length; i += 1) {
    if (patMap.has(patArr[i])) {
      if (patMap.get(patArr[i]) !== sArr[i]) {
        return false;
      }
    } else {
      patMap.set(patArr[i], sArr[i]);
    }
  }
  return true;
};
