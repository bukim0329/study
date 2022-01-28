/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  return Math.max(...Array.from(Array(nums.length / 2), (_, ind) => nums[ind] + nums[nums.length - ind - 1]));
};
