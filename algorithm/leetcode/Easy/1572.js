/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    return mat.reduce((ans, cur, ind)=>{
        return ans + ((ind === cur.length - ind - 1) ? cur[ind] : cur[ind] + cur[cur.length - ind - 1]);
    }, 0)
};