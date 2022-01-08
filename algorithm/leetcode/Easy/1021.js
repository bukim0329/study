/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let l = 0, r = 0;
    return [...s].filter(val=>{
        val === '(' ? l++ : r++;
        return (val === '(' && l - r === 1) || l - r === 0 ? false : true;
    }).join('');
};