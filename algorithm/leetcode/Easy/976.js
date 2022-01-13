/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    const sortNum = nums.sort((a, b)=>b - a);
    for (let i = 0; i < sortNum.length - 2; i++) {
        if (sortNum[i] < sortNum[i + 1] + sortNum[i + 2])
            return sortNum[i] + sortNum[i + 1] + sortNum[i + 2];
    }
    return 0;
};