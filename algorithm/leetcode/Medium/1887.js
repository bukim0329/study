/**
 * @param {number[]} nums
 * @return {number}
 */
const reductionOperations = function (nums) {
  let num = 0;
  nums.sort((a, b) => a - b);
  return nums.reduce((acc, cur, ind) => {
    if (ind !== 0 && nums[ind] !== nums[ind - 1]) {
      num += 1;
    }
    return acc + num;
  }, 0);
};
