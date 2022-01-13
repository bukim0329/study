/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const arr = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    return arr.every(val=>val === 0);
};