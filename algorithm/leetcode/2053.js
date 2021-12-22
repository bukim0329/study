/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    const objs = Object();
    arr.forEach(val=>objs[val] ? objs[val]++ : objs[val] = 1);
    const strEntries = Object.entries(objs);
    for (let i = 0; i < strEntries.length; i++) {
        if (strEntries[i][1] === 1)
            k--;
        if (k === 0)
            return strEntries[i][0];
    }
    return "";
};