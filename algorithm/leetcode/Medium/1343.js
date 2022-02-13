/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function (arr, k, threshold) {
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < k; i += 1) {
    sum += arr[i];
  }
  if (sum >= threshold * k) {
    ans += 1;
  }
  for (let i = 0; i < arr.length - k; i += 1) {
    sum += arr[i + k] - arr[i];
    if (sum >= threshold * k) {
      ans += 1;
    }
  }
  return ans;
};
