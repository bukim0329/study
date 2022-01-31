class CustomStack {
  /**
   * @param {number} maxSize
   */
  constructor(maxSize) {
    this.space = [];
    this.maxSize = maxSize;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.space.length < this.maxSize) {
      this.space.push(x);
    }
  }

  /**
   * @return {number}
   */
  pop() {
    return this.space.pop() || -1;
  }

  /**
   * @param {number} k
   * @param {number} val
   * @return {void}
   */
  increment(k, val) {
    for (let i = 0; i < Math.min(k, this.space.length); i += 1) {
      this.space[i] += val;
    }
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
