/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const ans = Array();
    for (let i = 1; i <= numRows; i++) {
        ans.push(Array.from(Array(i), (_, ind)=>{
            if (ind === 0 || ind === i - 1) {
                return 1;
            } else {
                return ans[i - 2][ind - 1] + ans[i - 2][ind];
            }
        }));
    }
    return ans;
};