/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
    let ans = -1;
    const sRev = s.split('').reverse();
    for (let i = 0; i < s.length; i += 1) {
        const len = s.length - sRev.indexOf(s[i]) - i - 2;
        ans = len > ans ? len : ans;
    }
    return ans;
};

// var maxLengthBetweenEqualCharacters = function(s) {
//     let max = -1;
//     [...new Set(s)].forEach(letter => max = Math.max(max, s.lastIndexOf(letter) - s.indexOf(letter) - 1));
//     return max;
// };