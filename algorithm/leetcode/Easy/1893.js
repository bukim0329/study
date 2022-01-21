/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
const isCovered = function (ranges, left, right) {
  for (let i = left; i < right + 1; i += 1) {
    if (!ranges.some(range => i <= range[1] && i >= range[0])) {
      return false;
    }
  }

  return true;
};
