/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
const containsPattern = function (arr, m, k) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    cnt += 1;
    if (arr[i] !== arr[i + m]) {
      cnt = 0;
    } else if (cnt === (k - 1) * m) {
      return true;
    }
  }

  return false;
};
