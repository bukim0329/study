/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let flag = 1;
    let ans;
    if (x < 0) {
        x *= -1;
        flag = -1;
    }
    ans = Number(String(x).split('').reverse().join('')) * flag;
    if (ans < 2 ** 31 && ans >= 2 ** 31 * -1)
        return ans;
    return 0;
};