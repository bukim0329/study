/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = nums => {
  let oldMax = 0;
  let newMax = 0;
  let cnt = 0;

  for (let i = 0; i < nums.length - 1; i += 1) {
    newMax = Math.max(newMax, i + nums[i]);
    if (i === oldMax) {
      oldMax = newMax;
      cnt += 1;
    }
  }

  return cnt;
};
