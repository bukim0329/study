/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const revA = a.split('').reverse();
  const revB = b.split('').reverse();
  const res = [];
  let ind = 0;
  let carry = 0;
  while (ind < revA.length || ind < revB.length || carry !== 0) {
    res[ind] = Number(revA[ind] || 0) ^ Number(revB[ind] || 0) ^ carry;
    carry = Number(revA[ind] || 0) + Number(revB[ind] || 0) + carry > 1 ? 1 : 0;
    ind += 1;
  }
  return res.reverse().join('');
};
