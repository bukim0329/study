/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  const arrNum1 = num1.split('').reverse();
  const arrNum2 = num2.split('').reverse();
  const ans = [];
  let carry = 0;
  let i = 0;
  while (!(carry === 0 && !arrNum1[i] && !arrNum2[i])) {
    const tmp = Number(arrNum1[i] || 0) + Number(arrNum2[i] || 0) + carry;
    if (tmp < 10) {
      carry = 0;
      ans.push(tmp);
    } else {
      carry = 1;
      ans.push(tmp - 10);
    }
    i += 1;
  }

  return ans.reverse().join('');
};
