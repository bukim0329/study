/**
 * @param {number[]} nums
 * @return {number}
 */
const countElements = function (nums) {
  nums.sort((a, b) => a - b);
  const [min, max] = [nums[0], nums[nums.length - 1]];
  return nums.filter(num => num !== min && num !== max).length;
};
