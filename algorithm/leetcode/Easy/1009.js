/**
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
    let num = 2;
    while (num <= n) {
        num = num << 1;
    }
    return (num - 1) ^ n;
};