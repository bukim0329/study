/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let ans = 0;
  let before = prices[0];
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] > before) {
      ans += prices[i] - before;
    }
    before = prices[i];
  }
  return ans;
};
