/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (n, trust) {
  const check = Array(n + 1).fill(0);
  trust.forEach(arr => {
    check[arr[0]] -= 1;
    check[arr[1]] += 1;
  });
  for (let i = 1; i < n + 1; i += 1) {
    if (check[i] === n - 1) {
      return i;
    }
  }

  return -1;
};
