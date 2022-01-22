/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
const prefixesDivBy5 = function (nums) {
  let num = 0;
  return nums.map(val => {
    num = (num * 2 + val) % 5;
    return num === 0;
  });
};
