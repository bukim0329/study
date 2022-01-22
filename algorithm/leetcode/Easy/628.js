/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
  const len = nums.length;
  const sortedNums = nums.sort((a, b) => a - b);

  return Math.max(
    sortedNums[0] * sortedNums[1] * sortedNums[len - 1],
    sortedNums[len - 1] * sortedNums[len - 2] * sortedNums[len - 3]
  );
};
