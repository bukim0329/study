/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    const expected = [...heights].sort((a, b)=>a - b);
    return heights.reduce((acc, cur, ind)=>expected[ind] !== cur ? acc + 1 : acc, 0);
};