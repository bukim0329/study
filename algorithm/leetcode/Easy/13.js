/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let ans = 0;
    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    for (let i = 0; i < s.length; i += 1) {
        ans += symbols[s[i]] < symbols[s[i + 1]] ? symbols[s[i]] * -1 : symbols[s[i]];
    }
    return ans;
};