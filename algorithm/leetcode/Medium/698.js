/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = (nums, k) => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % k !== 0) return false;
  const arr = Array.from({ length: nums.length }, () => false);
  const target = sum / k;

  const backtrack = (ind, k, subsetSum) => {
    if (k === 0) return true;
    if (subsetSum === target) return backtrack(0, k - 1, 0);
    for (let j = ind; j < nums.length; j++) {
      if (!arr[j] && subsetSum + nums[j] <= target) {
        arr[j] = true;
        if (backtrack(j + 1, k, subsetSum + nums[j])) return true;
        arr[j] = false;
      }
    }
    return false;
  };

  return backtrack(0, k, 0);
};
