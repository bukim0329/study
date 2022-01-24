/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canBeIncreasing = function (nums) {
  const flag = [];
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] >= nums[i]) {
      flag.push(i);
    }
  }
  if (flag.length > 1) {
    return false;
  }
  return (
    [...nums.slice(0, flag[0] - 1), ...nums.slice(flag[0])].every(
      (val, ind, arr) => arr[ind] > (arr[ind - 1] || -Infinity)
    ) ||
    [...nums.slice(0, flag[0]), ...nums.slice(flag[0] + 1)].every(
      (val, ind, arr) => arr[ind] > (arr[ind - 1] || -Infinity)
    )
  );
};
