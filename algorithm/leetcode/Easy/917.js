/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const l = s.split('').filter(val=>(/[a-zA-Z]/).test(val))
    const arr = Array();
    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z]/.test(s[i])) {
            arr.push(l.pop());
        } else {
            arr.push(s[i]);
        }
    }
    return arr.join('');
};