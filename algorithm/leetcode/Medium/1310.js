/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function (arr, queries) {
  return queries.map(([left, right]) => {
    let ans = 0;
    for (let i = left; i <= right; i += 1) {
      ans ^= arr[i];
    }
    return ans;
  });
};
