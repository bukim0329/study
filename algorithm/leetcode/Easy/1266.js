/**
 * @param {number[][]} points
 * @return {number}
 */
 var minTimeToVisitAllPoints = function(points) {
    return points.reduce((acc, cur, ind, point)=>{
        if (ind === 0) return 0;
        return acc + Math.max(Math.abs(cur[0] - point[ind - 1][0]), Math.abs(cur[1] - point[ind - 1][1]));
    }, 0);
};