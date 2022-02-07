/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const maxSumAfterPartitioning = function (arr, k) {
  const dp = [0];
  for (let i = 0; i < arr.length; i += 1) {
    let best = arr[i] + dp[i];
    for (let j = 1; j < k && i - j >= 0; j += 1) {
      best = Math.max(Math.max(...arr.slice(i - j, i + 1)) * (j + 1) + dp[i - j], best);
    }
    dp[i + 1] = best;
  }
  return dp[arr.length];
};
