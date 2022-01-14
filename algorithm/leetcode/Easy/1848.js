/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let left = start;
    let right = start;
    while(left >= 0 || right < nums.length){
        if(nums[left] === target) return start-left;
        if(nums[right] === target) return right - start;
        left -= 1;
        right += 1;
    }
};