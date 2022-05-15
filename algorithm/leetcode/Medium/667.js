/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = function (n, k) {
  const ans = new Array(n);
  let a = 1;
  let z = k + 1;
  for (let i = 0; i <= k; i += 1) {
    if (i % 2) {
      ans[i] = z;
      z -= 1;
    } else {
      ans[i] = a;
      a += 1;
    }
  }
  for (let i = k + 1; i < n; ) {
    i += 1;
    ans[i - 1] = i;
  }
  return ans;
};
