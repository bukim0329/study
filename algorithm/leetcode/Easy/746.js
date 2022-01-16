/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    const DP = Array();
    cost.forEach((val, ind)=>{
        DP[ind] = Math.min(DP[ind - 2] || 0, DP[ind - 1] || 0) + val;
    });
    return Math.min(DP[cost.length - 2], DP[cost.length - 1]);
};