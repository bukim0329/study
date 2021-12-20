/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
    return prices.map((val, ind)=>val - (prices.slice(ind + 1).find(v=>v < val) || 0));
};