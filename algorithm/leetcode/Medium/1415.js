/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getHappyString = function (n, k) {
  const backtracking = (last, num) => {
    const ch = ['a', 'b', 'c'];
    const ans = [];
    if (num === 1) {
      ch.forEach(val => {
        if (val !== last) {
          ans.push(val);
        }
      });
      return ans;
    }
    for (let i = 0; i < 3; i += 1) {
      if (last !== ch[i]) {
        const rest = backtracking(ch[i], num - 1);
        rest.forEach(str => {
          ans.push(ch[i] + str);
        });
      }
    }
    return ans;
  };
  return backtracking('', n)[k - 1] || '';
};
