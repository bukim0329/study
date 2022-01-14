/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
    return nums.join(',') === nums.slice().sort((a, b)=>a - b).join(',') || nums.join(',') === nums.sort((a, b)=>b - a).join(',');
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
    let increasing = true
    let decreasing = true
    for (let i = 0; i < nums.length - 1; i += 1) {
        if (nums[i] > nums[i + 1]) {
            increasing = false
        }
        if (nums[i] < nums[i + 1]) {
            decreasing = false
        }
    }
    return increasing || decreasing
};