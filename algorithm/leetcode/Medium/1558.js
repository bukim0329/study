/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = nums => {
  let oneCnt = 0;
  let len = 0;
  nums.forEach(x => {
    const bin = x.toString(2);
    oneCnt += bin.split('').reduce((acc, cur) => acc + Number(cur), 0);
    len = Math.max(len, bin.length - 1);
  });
  return oneCnt + len;
};
