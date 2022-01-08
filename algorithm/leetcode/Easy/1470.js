/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    return nums.map((val, ind, nums)=>{
        return ind % 2 === 0 ? nums[ind / 2] : nums[n + (ind - 1) / 2];
    });
};