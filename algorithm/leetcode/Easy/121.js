/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let max = 0;
  let min = Infinity;
  prices.forEach(val => {
    min = Math.min(min, val);
    max = Math.max(max, val - min);
  });

  return max;
};
