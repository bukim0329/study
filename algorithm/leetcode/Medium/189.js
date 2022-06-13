/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
  k %= nums.length;
  const reverse = (arr, start, end) => {
    while (start < end) {
      let tmp;
      tmp = arr[start];
      arr[start] = arr[end];
      arr[end] = tmp;
      start += 1;
      end -= 1;
    }
  };
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};
