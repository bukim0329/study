/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    return String(n).split('').reduce((acc, cur) => acc * Number(cur), 1) - String(n).split('').reduce((acc, cur) => acc + Number(cur), 0);
};