/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  for (let ind = 0; ind < nums.length; ind += 1) {
    if (map.has(target - nums[ind])) {
      return [map.get(target - nums[ind]), ind];
    }
    map.set(nums[ind], ind);
  }
};
