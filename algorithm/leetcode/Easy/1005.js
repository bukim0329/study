/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestSumAfterKNegations = function (nums, k) {
  const sorted = nums.sort((a, b) => a - b);
  let ind = 0;
  while (k > 0) {
    sorted[ind] *= -1;
    k -= 1;
    if (sorted[ind] > sorted[ind + 1]) {
      ind += 1;
    }
  }

  return sorted.reduce((acc, cur) => acc + cur, 0);
};
