/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = function (points, queries) {
  return queries.map(circle => {
    let ans = 0;
    points.forEach(([x, y]) => {
      if (((circle[0] - x) ** 2 + (circle[1] - y) ** 2) ** 0.5 <= circle[2]) {
        ans += 1;
      }
    });
    return ans;
  });
};
