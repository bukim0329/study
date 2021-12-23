/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    let odd = 0, even = 0;
    position.forEach(val=>val % 2 === 0 ? even++ : odd++);
    return odd > even ? even : odd;
};