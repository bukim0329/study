/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let max = 0;
    (s.match(/[()]/g) || []).reduce((acc, cur)=>{
        max = max > acc ? max : acc;
        return cur === '(' ? acc + 1 : acc - 1;
    }, 0);
    return max;
};