/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var decompressRLElist = function(nums) {
    const arr = Array();
    for (let i = 0; i < nums.length; i += 2) {
        arr.push(...Array(nums[i]).fill(nums[i + 1]));
    }
    return arr;
};