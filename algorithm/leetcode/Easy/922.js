/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    const ans = Array(nums.length);
    let odd = 1, even = 0;
    nums.forEach(val=>{
        if (val % 2 === 0) {
            ans[even] = val;
            even += 2;
        }
        else {
            ans[odd] = val;
            odd += 2;
        }
    });
    return ans;
};