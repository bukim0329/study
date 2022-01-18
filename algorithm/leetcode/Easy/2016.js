/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumDifference = function (nums) {
  let max = 0;
  for (let i = 1; i < nums.length; i += 1) {
    const tmp = Math.max(...nums.slice(i)) - Math.min(...nums.slice(0, i));
    max = max > tmp ? max : tmp;
  }
  return max > 0 ? max : -1;
};
