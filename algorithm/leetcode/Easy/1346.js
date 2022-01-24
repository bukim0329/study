/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i += 1) {
    if (map.has(arr[i] * 2) || map.has(arr[i] / 2)) {
      return true;
    }
    map.set(arr[i], 0);
  }
  return false;
};
