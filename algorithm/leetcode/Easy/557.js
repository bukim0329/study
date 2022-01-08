/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    return s.split(' ').map(val=>{
        return val.split('').reverse().join('');
    }).join(' ');
};