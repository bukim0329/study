/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const hash = Object();
    arr.forEach(val=>hash[val] ? hash[val]++ : hash[val] = 1);
    return (new Set(Object.values(hash))).size === Object.entries(hash).length;
};
