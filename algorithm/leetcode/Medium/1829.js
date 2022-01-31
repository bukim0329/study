/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
const getMaximumXor = function (nums, maximumBit) {
  let num = 0;
  const ans = [];
  nums.forEach(val => {
    num ^= val;
    ans.push(num ^ (2 ** maximumBit - 1));
  });

  return ans.reverse();
};
