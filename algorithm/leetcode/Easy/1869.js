/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
    return s.split('0').sort((a, b)=>a > b ? -1 : 1)[0].length > s.split('1').sort((a, b)=>a > b ? -1 : 1)[0].length;
};