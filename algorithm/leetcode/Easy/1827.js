/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    return nums.reduce((ans, num, ind, nums)=>{
        if (ind === 0 || nums[ind - 1] < num)
            return ans;
        ans += nums[ind - 1] - num + 1;
        nums[ind] += nums[ind - 1] - num + 1;
        return ans;
    }, 0);
};