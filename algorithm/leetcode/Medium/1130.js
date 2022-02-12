/**
 * @param {number[]} arr
 * @return {number}
 */
const mctFromLeafValues = function (arr) {
  let ans = 0;
  const stack = arr.slice().sort((a, b) => b - a);
  while (arr.length > 1) {
    const num = stack.pop();
    let idx = arr.indexOf(num);
    if ((arr[idx - 1] || Infinity) < (arr[idx + 1] || Infinity)) {
      idx -= 1;
    }
    ans += arr[idx] * arr[idx + 1];
    arr.splice(idx, 2, Math.max(arr[idx], arr[idx + 1]));
  }
  return ans;
};
