/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  const ans = [];
  let start = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] !== nums[i - 1] + 1) {
      start === nums[i - 1] ? ans.push(`${start}`) : ans.push(`${start}->${nums[i - 1]}`);
      start = nums[i];
    }
  }
  ans.push(start === nums[nums.length - 1] ? `${start}` : `${start}->${nums[nums.length - 1]}`);

  return ans;
};
