/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    return nums.map((val, _, nums)=>nums[val]);
};