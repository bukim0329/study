/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  if (nums.length === 1) {
    return [[nums[0]]];
  }
  const ans = [];
  for (let i = 0; i < nums.length; i += 1) {
    const fixed = nums[i];
    const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
    permute(rest)
      .map(val => [fixed, ...val])
      .forEach(elem => {
        ans.push(elem);
      });
  }
  return ans;
};
