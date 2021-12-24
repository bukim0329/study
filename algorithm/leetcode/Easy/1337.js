/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    return mat
    .map((arr, ind)=>[ind, arr.reduce((acc, cur)=>acc + cur, 0)])
    .sort((a, b)=>a[1] - b[1])
    .map(val=>val[0])
    .slice(0, k);
};
