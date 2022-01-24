/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (arr[left] < arr[left + 1]) {
    left += 1;
  }
  while (arr[right - 1] > arr[right]) {
    right -= 1;
  }
  if (left === 0 || right === arr.length - 1) {
    return false;
  }
  return left === right;
};
