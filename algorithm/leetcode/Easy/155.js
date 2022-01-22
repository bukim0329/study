class MinStack {
  constructor() {
    this.stack = [];
    this.ind = 0;
  }

  push(val) {
    this.stack[this.ind] = val;
    this.ind += 1;
  }

  pop() {
    this.ind -= 1;
    this.stack.splice(this.ind, 1);
  }

  top() {
    return this.stack[this.ind - 1];
  }

  getMin() {
    return Math.min(...this.stack);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
