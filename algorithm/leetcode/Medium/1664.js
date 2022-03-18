/**
 * @param {number[]} nums
 * @return {number}
 */
const waysToMakeFair = function (nums) {
  let leftOdd = 0;
  let leftEven = 0;
  let rightOdd = 0;
  let rightEven = 0;
  let ans = 0;

  nums.forEach((val, ind) => {
    ind % 2 === 0 ? (rightEven += val) : (rightOdd += val);
  });
  nums.forEach((val, ind) => {
    if (ind % 2 === 0) {
      rightEven -= val;
    } else {
      rightOdd -= val;
    }
    if (leftOdd + rightEven === leftEven + rightOdd) {
      ans += 1;
    }
    if (ind % 2 === 0) {
      leftEven += val;
    } else {
      leftOdd += val;
    }
  });

  return ans;
};
