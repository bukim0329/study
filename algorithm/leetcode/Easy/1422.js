/**
 * @param {string} s
 * @return {number}
 */
 var maxScore = function(s) {
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        const tmp = (s.slice(0, i).match(/0/g) || []).length + (s.slice(i).match(/1/g) || []).length;
        max = max > tmp ? max : tmp;
    }
    return max;
};