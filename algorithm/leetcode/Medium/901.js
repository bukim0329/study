const StockSpanner = function () {
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.prices.push(price);
  let ind = this.prices.length - 1;
  while (this.prices[ind] <= this.prices[this.prices.length - 1]) {
    ind -= 1;
  }
  return this.prices.length - ind - 1;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
