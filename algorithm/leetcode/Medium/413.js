/**
 * @param {number[]} nums
 * @return {number}
 */
const numberOfArithmeticSlices = function (nums) {
  const dp = [0, 0];
  for (let i = 2; i < nums.length; i += 1) {
    if (nums[i - 2] - nums[i - 1] === nums[i - 1] - nums[i]) {
      dp.push(dp[dp.length - 1] + 1);
    } else {
      dp.push(0);
    }
  }
  return dp.reduce((acc, cur) => acc + cur, 0);
};
