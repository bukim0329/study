/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
  let cnt = 0;
  let num = 1;
  while (1) {
    if (!arr.includes(num)) {
      cnt += 1;
    }
    if (cnt >= k) {
      return num;
    }
    num += 1;
  }
};
