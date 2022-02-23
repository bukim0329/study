/**
 * @param {number[]} flips
 * @return {number}
 */
const numTimesAllBlue = function (flips) {
  let max = 0;
  let ans = 0;
  for (let i = 0; i < flips.length; i += 1) {
    max = Math.max(max, flips[i]);
    if (max < i + 2) {
      ans += 1;
    }
  }

  return ans;
};
