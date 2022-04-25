/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = function (low, high) {
  const ans = [];
  for (let i = String(low).length; i <= String(high).length; i += 1) {
    for (let j = 1; j < 11 - i; j += 1) {
      let num = '';
      for (let k = 0; k < i; k += 1) {
        num += j + k;
      }
      if (Number(num) >= low && Number(num) <= high) {
        ans.push(num);
      }
    }
  }

  return ans;
};
