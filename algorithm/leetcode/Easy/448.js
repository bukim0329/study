/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    const set = [...new Set(nums.sort((a, b)=>a - b))];
    const ans = Array();
    for (let i = 1; i <= nums.length; i += 1) {
        if (!set.includes(i))
            ans.push(i);
    }
    return ans;
};