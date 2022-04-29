/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findLonely = function (nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((val, ind, arr) => (arr[ind - 1] ?? -Infinity) < arr[ind] - 1 && arr[ind] < (arr[ind + 1] ?? Infinity) - 1);
};
