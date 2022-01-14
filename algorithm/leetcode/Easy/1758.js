/**
 * @param {string} s
 * @return {number}
 */
 var minOperations = function(s) {
    let startOne = 0;
    let startZero = 0;
    for (let i = 0; i < s.length; i += 1) {
        s[i] % 2 === i % 2 ? startOne += 1 : startZero += 1;
    }
    return Math.min(startOne, startZero);
};