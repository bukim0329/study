/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const ans = [];
  let leftMul = 1;
  let rightMul = 1;
  for (let i = 0; i < nums.length; i += 1) {
    ans[i] = leftMul;
    leftMul *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    ans[i] *= rightMul;
    rightMul *= nums[i];
  }
  return ans;
};
