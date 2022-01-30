/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
const restoreMatrix = function (rowSum, colSum) {
  const ans = [];
  for (let i = 0; i < rowSum.length; i += 1) {
    const tmp = [];
    for (let j = 0; j < colSum.length; j += 1) {
      const min = Math.min(rowSum[i], colSum[j]);
      tmp.push(min);
      rowSum[i] -= min;
      colSum[j] -= min;
    }
    ans.push(tmp);
  }
  return ans;
};
