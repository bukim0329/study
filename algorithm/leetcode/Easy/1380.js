/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    const ans = Array();
    matrix.forEach(arr=>{
        const min = Math.min(...arr);
        const ind = arr.indexOf(min);
        if (matrix.every(elem=>elem[ind] <= min))
            ans.push(min);
    });
    return ans;
};