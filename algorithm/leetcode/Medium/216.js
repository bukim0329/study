/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const ans = [];
  const backtracking = (arr, nums, num, sum) => {
    if (num === 0 && sum === 0) {
      ans.push(arr);
      return;
    }

    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] > sum) return;
      backtracking([...arr, nums[i]], [...nums.slice(i + 1)], num - 1, sum - nums[i]);
    }
  };
  backtracking([], [1, 2, 3, 4, 5, 6, 7, 8, 9], k, n);

  return ans;
};
