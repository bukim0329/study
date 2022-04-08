/**
 * @param {number} n
 * @return {number}
 */
const countLargestGroup = function (n) {
  const getDigit = num => {
    let ret = 0;
    while (num > 0) {
      ret += num % 10;
      num = Math.floor(num / 10);
    }
    return ret;
  };
  const nums = Array.from({ length: 37 }, () => 0);
  for (let i = 1; i <= n; i += 1) {
    nums[getDigit(i)] += 1;
  }
  const max = Math.max(...nums);

  return nums.reduce((acc, cur) => (cur === max ? acc + 1 : acc), 0);
};
