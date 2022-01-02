/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freq = Object();
    nums.forEach(val=>freq[val] ? freq[val]++ : freq[val] = 1);
    return nums.sort((a, b)=>{
        return freq[a] !== freq[b] ? freq[a] - freq[b] : b - a;
    })
};
