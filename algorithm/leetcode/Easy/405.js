/**
 * @param {number} num
 * @return {string}
 */
const toHex = function (num) {
  if (num === 0) {
    return '0';
  }
  if (num < 0) {
    num = 2 ** 32 + num;
  }
  const ans = [];
  const hex = '0123456789abcdef';
  while (num > 0) {
    ans.push(hex[num % 16]);
    num = Math.floor(num / 16);
  }

  return ans.reverse().join('');
};
