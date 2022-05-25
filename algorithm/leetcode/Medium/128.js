/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const set = new Set(nums);
  let max = 0;
  nums.forEach(val => {
    if (!set.has(val - 1)) {
      let num = val;
      while (set.has(num)) {
        num += 1;
      }
      max = Math.max(max, num - val);
    }
  });

  return max;
};
