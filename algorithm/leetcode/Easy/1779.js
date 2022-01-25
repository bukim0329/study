/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
const nearestValidPoint = function (x, y, points) {
  let min = Infinity;
  let ans = -1;
  points.forEach((point, ind) => {
    if (point[0] === x || point[1] === y) {
      if (Math.abs(point[0] - x) + Math.abs(point[1] - y) < min) {
        min = Math.abs(point[0] - x) + Math.abs(point[1] - y);
        ans = ind;
      }
    }
  });

  return ans;
};
