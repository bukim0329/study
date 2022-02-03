/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
const numOfPairs = function (nums, target) {
  let ans = 0;
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (i !== j && nums[i] + nums[j] === target) {
        ans += 1;
      }
    }
  }

  return ans;
};
