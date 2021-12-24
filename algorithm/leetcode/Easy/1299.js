/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    return arr.map((val, ind)=>Math.max(...arr.slice(ind + 1), -1));
};