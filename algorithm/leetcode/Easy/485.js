/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  nums.reduce((acc, cur) => {
    if (cur === 0) {
      return 0;
    }
    if (acc + cur > max) {
      max = acc + cur;
    }
    return acc + cur;
  }, 0);
  return max;
};
