/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    const set1 = [...new Set(nums1)];
    const set2 = [...new Set(nums2)];
    return set1.reduce((acc, cur)=>{
        if (nums2.includes(cur))
            acc.push(cur);
        return a
    }, []);
};