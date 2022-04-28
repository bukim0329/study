/**
 * @param {number} num
 * @return {number[]}
 */
const sumOfThree = function (num) {
  return num % 3 ? [] : [num / 3 - 1, num / 3, num / 3 + 1];
};
