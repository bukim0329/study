/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies);
    return candies.map(val=>{
        return val + extraCandies < max ? false : true;
    });
};