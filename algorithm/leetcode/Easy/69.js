/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let low = 0;
  let high = Math.floor(x / 2);
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (mid ** 2 < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low ** 2 === x ? low : low - 1;
};
