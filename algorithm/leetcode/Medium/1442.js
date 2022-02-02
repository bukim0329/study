/**
 * @param {number[]} arr
 * @return {number}
 */
const countTriplets = function (arr) {
  let ans = 0;
  for (let i = 0; i < arr.length - 1; i += 1) {
    let tmp = arr[i];
    for (let j = i + 1; j < arr.length; j += 1) {
      tmp ^= arr[j];
      if (tmp === 0) {
        ans += j - i;
      }
    }
  }

  return ans;
};
