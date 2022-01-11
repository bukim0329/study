/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
    const ans = Array();
    if (original.length === m * n) {
        for (let i = 0; i < m; i++) {
            ans.push(original.splice(0, n));
        }
    }
    return ans;
};