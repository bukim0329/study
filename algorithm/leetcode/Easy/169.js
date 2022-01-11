/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const hash = Object();
    nums.forEach(val=>hash[val] ? hash[val] += 1 : hash[val] = 1);
    const hashEntries = Object.entries(hash).sort((a, b)=>b[1] - a[1]);
    return hashEntries[0][0];
};