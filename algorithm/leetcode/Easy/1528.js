/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    return indices.map((_, i)=>s[indices.indexOf(i)]).join('');
};