/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getSumAbsoluteDifferences = function (nums) {
  const sum = [0];
  for (let i = 0; i < nums.length; i += 1) {
    sum.push(sum[i] + nums[i]);
  }
  return nums.map((val, ind) => {
    const left = sum[ind];
    const right = sum[sum.length - 1] - sum[ind] - val;
    return Math.abs((2 * ind - nums.length + 1) * val - left + right);
  });
};
