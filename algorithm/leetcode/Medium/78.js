/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  const ans = [];
  const comb = (fixed, index) => {
    ans.push(fixed);
    for (let i = index; i < nums.length; i += 1) {
      comb([...fixed, nums[i]], i + 1);
    }
  };
  comb([], 0);
  return ans;
};
