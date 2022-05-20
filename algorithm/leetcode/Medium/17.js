/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = digits => {
  const combination = str => {
    const map = new Map([
      ['', []],
      ['2', 'abc'.split('')],
      ['3', 'def'.split('')],
      ['4', 'ghi'.split('')],
      ['5', 'jkl'.split('')],
      ['6', 'mno'.split('')],
      ['7', 'pqrs'.split('')],
      ['8', 'tuv'.split('')],
      ['9', 'wxyz'.split('')],
    ]);
    if (str.length <= 1) {
      return map.get(str);
    }
    const head = map.get(str.slice(0, 1));
    const ret = [];
    head.forEach(ch => {
      combination(str.slice(1)).forEach(s => {
        ret.push(ch + s);
      });
    });
    return ret;
  };
  return combination(digits);
};
