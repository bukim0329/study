/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    const sortNums = nums.slice().sort((a, b)=>a - b);
    return sortNums[sortNums.length - 1] * sortNums[sortNums.length - 2] - sortNums[0] * sortNums[1];
};