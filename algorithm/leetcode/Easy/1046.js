/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones = stones.sort((a, b)=>b - a);
        stones = stones[0] === stones[1] ? [...stones.slice(2)] : [stones[0] - stones[1], ...stones.slice(2)];
    }
    return stones[0] || 0;
};