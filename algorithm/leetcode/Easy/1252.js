/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 var oddCells = function(m, n, indices) {
    const mat = Array.from(Array(m), ()=>Array(n).fill(0));
    indices.forEach(val=>{
        const [row, col] = val;
        mat[row].forEach((_, ind, mat)=>{
            mat[ind]++;
        });
        mat.forEach((_, ind, mat)=>{
            mat[ind][col]++;
        });
    });
    return mat.reduce((ans, cur)=>{
        return ans + cur.reduce((a, c)=>c % 2 === 1 ? a + 1 : a, 0);
    }, 0)
};