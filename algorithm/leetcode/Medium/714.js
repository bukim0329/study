/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
  let ans = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] > min + fee) {
      ans += prices[i] - fee - min;
      min = prices[i] - fee;
    }
  }

  return ans;
};
