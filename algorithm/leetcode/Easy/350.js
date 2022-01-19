/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function (nums1, nums2) {
  const ans = [];
  for (let i = 0; i < nums1.length; i += 1) {
    if (nums2.includes(nums1[i])) {
      ans.push(nums1[i]);
      nums2.splice(nums2.indexOf(nums1[i]), 1);
    }
  }

  return ans;
};
