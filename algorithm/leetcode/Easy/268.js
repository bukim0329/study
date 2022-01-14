/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    return (nums.length * (nums.length + 1)) / 2 - nums.reduce((acc, cur)=>acc + cur, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    const sortNums = nums.sort((a, b)=>a - b);
    for (let i = 0; i < nums.length; i += 1) {
        if (sortNums[i] !== i)
            return i;
    }
    return nums.length;
};