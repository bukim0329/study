/**
 * @param {number} n
 * @return {boolean}
 */
const checkPowersOfThree = function (n) {
  return ![...n.toString(3)].some(val => val === '2');
};
