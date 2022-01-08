/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    return stones.split('').reduce((acc, cur)=> acc + Number(jewels.includes(cur)), 0);
};