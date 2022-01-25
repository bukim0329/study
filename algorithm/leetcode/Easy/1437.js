/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
  let num = Infinity;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 1) {
      if (num < k) {
        return false;
      }
      num = 0;
    } else {
      num += 1;
    }
  }
  return true;
};
