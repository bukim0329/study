/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const ans = [];
  const permu = (candidates, target, arr) => {
    if (target === 0) {
      ans.push(arr.slice());
      return;
    }
    for (let i = 0; i < candidates.length; i += 1) {
      const tmp = candidates[i];
      if (tmp <= target) {
        arr.push(tmp);
        permu(candidates.slice(i), target - tmp, arr);
        arr.pop();
      }
    }
  };
  candidates.sort((a, b) => a - b);
  permu(candidates, target, []);
  return ans;
};
