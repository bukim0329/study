/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        const tmp = nums.slice(i + 1).indexOf(target - nums[i]);
        if (tmp >= 0)
            return [i, i + tmp + 1];
    }
};