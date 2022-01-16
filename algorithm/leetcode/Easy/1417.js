/**
 * @param {string} s
 * @return {string}
 */
 var reformat = function(s) {
    const alpha = s.match(/[0-9]/g) || [];
    const num = s.match(/[a-z]/g) || [];
    if (Math.abs(alpha.length - num.length) > 1)
        return '';
    if (alpha.length > num.length) {
        return alpha.map((val, ind)=>val + (num[ind] || '')).join('');
    } else {
        return num.map((val, ind)=>val + (alpha[ind] || '')).join('');
    }
};