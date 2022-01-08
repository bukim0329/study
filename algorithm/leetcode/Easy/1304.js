/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
    return [...Array.from(Array(n - 1), (val, ind)=>ind + 1), -1 * n * (n - 1) / 2];
};