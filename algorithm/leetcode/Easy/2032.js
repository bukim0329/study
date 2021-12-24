/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const nSet1 = new Set(nums1);
    const nSet2 = new Set(nums2);
    const nSet3 = new Set(nums3);
    const res = new Set();
    nums1.forEach(val=>{
        if (nSet2.has(val) || nSet3.has(val))
            res.add(val);
    });
    nums2.forEach(val=>{
        if (nSet3.has(val))
            res.add(val);
    });
    return Array.from(res);
};
