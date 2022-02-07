/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
const getKth = function (lo, hi, k) {
  const DP = [0, 0, 1, 7, 2];
  const getDP = num => {
    if (!DP[num]) {
      if (num % 2 === 0) {
        getDP(num / 2);
        DP[num] = DP[num / 2] + 1;
      } else {
        getDP(num * 3 + 1);
        DP[num] = DP[num * 3 + 1] + 1;
      }
    }
  };

  const ans = [];

  for (let i = lo; i <= hi; i += 1) {
    if (!DP[i]) {
      getDP(i);
    }
    ans.push(i);
  }

  return ans.sort((a, b) => DP[a] - DP[b])[k - 1];
};
