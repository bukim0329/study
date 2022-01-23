/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = function (arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  let first = Infinity;
  let last = -Infinity;
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    res += arr[i];
    if (res === sum / 3) {
      first = i;
      break;
    }
  }
  res = 0;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    res += arr[i];
    if (res === sum / 3) {
      last = i;
      break;
    }
  }

  return first + 1 < last;
};
