/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    const BC = Object();
    for (let i = lowLimit; i <= highLimit; i++) {
        const tmp = String(i).split('').reduce((acc, cur)=>acc + Number(cur), 0);
        BC[tmp] ? BC[tmp]++ : BC[tmp] = 1;
    }
    return Math.max(...Object.values(BC));
};