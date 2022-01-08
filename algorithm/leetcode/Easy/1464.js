/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    const max = Math.max(...nums);
    nums.splice(nums.indexOf(max), 1);
    return (max - 1) * (Math.max(...nums) - 1);
};