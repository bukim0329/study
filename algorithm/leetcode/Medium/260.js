/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
  const xorRes1 = nums.reduce((acc, cur) => acc ^ cur, 0);
  const xorRes2 = nums
    .filter(num => ((num >> (xorRes1.toString(2).length - 1)) & 1) === 0)
    .reduce((acc, cur) => acc ^ cur, 0);

  return [xorRes1 ^ xorRes2, xorRes2];
};
