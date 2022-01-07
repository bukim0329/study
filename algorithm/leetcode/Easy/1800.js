/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxAscendingSum = function(nums) {
    let ans = 0;
    const last = nums.reduce((acc, cur, ind)=>{
        if (acc === 0 || nums[ind - 1] < cur)
            acc += cur;
        else {
            ans = ans < acc ? acc : ans;
            acc = cur;
        }
        return acc;
    }, 0);
    return ans < last ? last : ans;
};