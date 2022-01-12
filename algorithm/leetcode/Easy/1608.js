/**
 * @param {number[]} nums
 * @return {number}
 */
 var specialArray = function(nums) {
    for (let i = 1; i <= nums.length; i++) {
        let num = 0;
        for (let ind = 0; ind < nums.length; ind++) {
            if (i <= nums[ind]) {
                num += 1;
            }
        }
        if (num === i)
            return num;
    }
    return -1;
};