/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    return nums1.map(val=>{
        const arr = nums2.slice(nums2.indexOf(val) + 1);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > val)
                return arr[i];
        }
        return -1;
    });
};