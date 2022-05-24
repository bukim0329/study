/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  if (!nums.length) return 0;

  const stack = [nums[0]];

  for (let i = 1; i < nums.length; ++i) {
    for (let j = 0; j < stack.length; ++j) {
      if (nums[i] <= stack[j]) {
        stack[j] = nums[i];
        break;
      }
      if (j === stack.length - 1) stack.push(nums[i]);
    }
  }
  return stack.length;
};
