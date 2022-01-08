/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    const hash = {};
    let ans = 0;
    for (let n of nums) {
        if (hash[n])
            ans += hash[n];
        hash[n + k] ? hash[n + k]++ : hash[n + k] = 1;
        hash[n - k] ? hash[n - k]++ : hash[n - k] = 1;
    }
    return ans;
};