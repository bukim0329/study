/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let ans = 0;
    while (num > 0) {
        ans++;
        num % 2 ? num -= 1 : num /= 2;
    }
    return ans;
};