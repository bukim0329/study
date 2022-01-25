/**
 * @param {number} num
 * @return {boolean}
 */
const isSameAfterReversals = function (num) {
  return num === 0 ? true : num % 10 !== 0;
};
