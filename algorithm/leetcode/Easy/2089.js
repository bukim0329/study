/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var targetIndices = function(nums, target) {
    const ans = Array();
    nums.sort((a, b)=>a - b).forEach((val, ind)=>{
        if (val === target)
            ans.push(ind);
    });
    return ans;
};