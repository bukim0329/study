/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    const tmp = mat.flat();
    const ans = Array();
    if (r * c !== tmp.length)
        return mat;
    for (let i = 0; i < r; i++) {
        ans.push(tmp.splice(0, c));
    }
    return ans;
};