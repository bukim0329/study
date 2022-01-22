/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (total - sum - nums[i] === sum) {
      return i;
    }
    sum += nums[i];
  }

  return -1;
};
