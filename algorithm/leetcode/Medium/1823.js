/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findTheWinner = function (n, k) {
  const arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(i + 1);
  }
  let ind = 0;
  while (ind !== arr.length - 1) {
    if (ind % k !== k - 1) {
      arr.push(arr[ind]);
    }
    ind += 1;
  }
  return arr[ind];
};
