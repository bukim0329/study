/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    const hash = {};
    rectangles.map(val=>Math.min(...val)).forEach(val=>{
        hash[val] ? hash[val]++ : hash[val] = 1;
    });
    return hash[Math.max(...Object.keys(hash))];
};