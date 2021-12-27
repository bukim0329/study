/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    const ans = Array();
    Array.from(s).forEach((val, ind, arr)=>{
        const cand1 = ans[ind - 1] + 1 || Infinity; 
        const cand2 = arr.slice(ind).indexOf(c);
        if (cand2 < 0)
            ans.push(cand1);
        else
            ans.push(cand1 > cand2 ? cand2 : cand1);
    });
    return ans;
};