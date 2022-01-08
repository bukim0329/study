/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(val=>val.reduce((acc, cur)=>acc + cur, 0)));
};