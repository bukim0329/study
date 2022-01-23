/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const areAlmostEqual = function (s1, s2) {
  if (s1 === s2) {
    return true;
  }
  const s1Arr = [];
  const s2Arr = [];
  for (let i = 0; i < s1.length; i += 1) {
    if (s1[i] !== s2[i]) {
      s1Arr.push(s1[i]);
      s2Arr.push(s2[i]);
    }
  }

  return s1Arr.reverse().join('') === s2Arr.join('') && s1Arr.length === 2;
};
