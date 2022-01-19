/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  const sortedNums = nums.sort((a, b) => a - b);
  let ret = Infinity;
  for (let i = 0; i < nums.length - k + 1; i += 1) {
    const tmp = sortedNums.slice(i, i + k);
    const [min, max] = [tmp[0], tmp[k - 1]];
    ret = ret < max - min ? ret : max - min;
  }

  return ret;
};
