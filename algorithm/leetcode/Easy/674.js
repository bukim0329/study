/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  let ans = 0;
  let tmp = 1;
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] < nums[i]) {
      tmp += 1;
    } else {
      ans = ans > tmp ? ans : tmp;
      tmp = 1;
    }
  }

  return ans > tmp ? ans : tmp;
};
