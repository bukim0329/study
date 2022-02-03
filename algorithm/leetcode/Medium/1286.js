class CombinationIterator {
  /**
   * @param {string} characters
   * @param {number} combinationLength
   */
  constructor(characters, combinationLength) {
    const getCombination = (str, len) => {
      if (len === 1) {
        return str.split('');
      }
      const ret = [];
      for (let i = 0; i < str.length; i += 1) {
        const fixed = str[i];
        const rest = getCombination(str.slice(i + 1), len - 1);
        rest.forEach(val => {
          ret.push(fixed + val);
        });
      }
      return ret;
    };
    this.combination = getCombination(characters, combinationLength);
    this.ind = 0;
  }

  /**
   * @return {string}
   */
  next() {
    this.ind += 1;
    return this.combination[this.ind - 1];
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.ind < this.combination.length;
  }
}

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
