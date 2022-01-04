/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    if (nums.includes(0))
        return 0;
    return nums.reduce((acc, cur)=>acc * cur, 1) > 0 ? 1 : -1;
};