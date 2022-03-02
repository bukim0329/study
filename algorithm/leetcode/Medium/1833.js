/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
const maxIceCream = function (costs, coins) {
  let sum = 0;
  costs.sort((a, b) => a - b);
  for (let i = 0; i < costs.length; i += 1) {
    sum += costs[i];
    if (sum > coins) {
      return i;
    }
  }
  return costs.length;
};
