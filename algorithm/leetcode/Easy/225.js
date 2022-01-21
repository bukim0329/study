class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    this.queue1.push(x);
  }

  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return this.queue2.shift();
  }

  top() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    const tmp = this.queue2.shift();
    this.queue1.push(tmp);
    return tmp;
  }

  empty() {
    return this.queue1.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
