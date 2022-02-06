/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let ind = 0;
  nums.forEach((val, i, nums) => {
    if (nums[i] !== nums[i + 2]) {
      nums[ind] = nums[i];
      ind += 1;
    }
  });
  return ind;
};
