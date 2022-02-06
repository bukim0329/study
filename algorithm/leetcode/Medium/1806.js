/**
 * @param {number} n
 * @return {number}
 */
const reinitializePermutation = function (n) {
  let perm = Array.from({ length: n }, (_, ind) => ind);
  let ans = 0;
  do {
    const arr = [];
    for (let i = 0; i < n; i += 1) {
      arr[i] = i % 2 === 0 ? perm[i / 2] : perm[n / 2 + (i - 1) / 2];
    }
    perm = arr.slice();
    ans += 1;
  } while (!perm.every((val, ind) => val === ind));

  return ans;
};
