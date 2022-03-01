/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const maximumScore = function (a, b, c) {
  const arr = [a, b, c].sort((x, y) => x - y);
  const diff = Math.ceil((arr[0] + arr[1] - arr[2]) / 2);
  return diff > 0 ? arr[0] + arr[1] - diff : arr[0] + arr[1];
};
