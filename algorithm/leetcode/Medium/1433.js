/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkIfCanBreak = function (s1, s2) {
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  return arr1.every((val, ind) => val >= arr2[ind]) || arr1.every((val, ind) => val <= arr2[ind]);
};
