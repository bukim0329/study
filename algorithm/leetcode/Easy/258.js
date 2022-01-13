/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    while (1) {
        num = String(num).split('').reduce((acc, cur)=>acc + Number(cur), 0);
        if (num < 10)
            return num;
    }
};