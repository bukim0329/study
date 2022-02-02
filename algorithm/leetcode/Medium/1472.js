class BrowserHistory {
  /**
   * @param {string} homepage
   */
  constructor(homepage) {
    this.backStack = [homepage];
    this.forwStack = [];
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    this.forwStack = [];
    this.backStack.push(url);
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    const min = Math.min(steps, this.backStack.length - 1);
    for (let i = 0; i < min; i += 1) {
      this.forwStack.push(this.backStack.pop());
    }
    return this.backStack[this.backStack.length - 1];
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    const min = Math.min(steps, this.forwStack.length);
    for (let i = 0; i < min; i += 1) {
      this.backStack.push(this.forwStack.pop());
    }
    return this.backStack[this.backStack.length - 1];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
