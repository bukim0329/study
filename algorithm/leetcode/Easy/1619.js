/**
 * @param {number[]} arr
 * @return {number}
 */
 var trimMean = function(arr) {
    const len = arr.length;
    return arr.sort((a, b)=>a - b).slice(len / 20, len * 19 / 20).reduce((acc, cur)=>acc + cur, 0) / (len * 9 / 10);
};