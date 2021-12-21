/**
 * @param {number[]} nums
 * @return {number}
 */
 var subsetXORSum = function(nums) {
    let ans = 0;
    function backtracking(arr, start) {
        ans += arr.reduce((acc, cur)=>acc^cur, 0);
        console.log(arr);
        for (let i = start; i < nums.length; i++) {
            arr.push(nums[i]);
            backtracking(arr, i + 1);
            arr.pop(nums[i]);
        }
    }
    backtracking([], 0);
    return ans;
};