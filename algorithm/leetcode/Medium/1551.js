/**
 * @param {number} n
 * @return {number}
 */
const minOperations = function (n) {
  return n % 2 === 0 ? (n / 2) ** 2 : ((n + 1) / 2) * ((n + 1) / 2 - 1);
};
