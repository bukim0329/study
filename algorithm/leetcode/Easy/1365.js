/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    const sortNum = nums.slice().sort((a, b)=>a - b);
    return nums.map(val=>sortNum.indexOf(val));
};