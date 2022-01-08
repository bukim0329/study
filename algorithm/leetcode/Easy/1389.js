/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray = function(nums, index) {
    const ans = Array();
    nums.forEach((val, ind)=>{
        ans.splice(index[ind], 0, val);
    });
    return ans;
};