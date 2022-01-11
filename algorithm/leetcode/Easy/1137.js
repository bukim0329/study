/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    const table = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        table[i] = table[i - 3] + table[i - 2] + table[i - 1];
    }
    return table[n];
};