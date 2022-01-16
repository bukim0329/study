/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(num) {
    const ind = Math.max(num.lastIndexOf('1'), num.lastIndexOf('3'), num.lastIndexOf('5'), num.lastIndexOf('7'), num.lastIndexOf('9'));
    return ind < 0 ? '' : num.slice(0, ind + 1);
};

/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(num) {
    for (let i = num.length - 1; i >= 0; i -= 1) {
        if (num[i] % 2 === 1)
            return num.slice(0, i + 1);
    }
    return '';
};