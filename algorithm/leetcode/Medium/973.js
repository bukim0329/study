/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  return points.sort((a, b) => Math.sqrt(a[0] * a[0] + a[1] * a[1]) - Math.sqrt(b[0] * b[0] + b[1] * b[1])).slice(0, k);
};
