/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let ans = 0;
    nums.forEach(val=>{
        if (String(val).length % 2 === 0)
            ans++;
    });
    return ans;
};