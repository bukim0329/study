/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = function (num, k) {
  const kArr = String(k).split('').reverse();
  const revNum = num.reverse();
  const ans = [];
  let carry = 0;
  let ind = 0;
  while (carry === 1 || ind < Math.max(num.length, kArr.length)) {
    const tmp = Number(kArr[ind] || 0) + Number(revNum[ind] || 0) + carry;
    if (tmp < 10) {
      carry = 0;
      ans.push(tmp);
    } else {
      carry = 1;
      ans.push(tmp - 10);
    }
    ind += 1;
  }

  return ans.reverse();
};
