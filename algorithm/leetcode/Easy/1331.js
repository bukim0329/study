/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    const set = [...new Set(arr)].sort((a, b)=>a - b);
    return arr.map(val=>set.indexOf(val) + 1);
};