/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
  const sum = [...new Set(nums)].reduce((acc, cur) => acc + cur, 0);
  return [nums.reduce((acc, cur) => acc + cur, 0) - sum, (nums.length * (nums.length + 1)) / 2 - sum];
};
