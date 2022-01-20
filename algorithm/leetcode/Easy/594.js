/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function (nums) {
  const hash = {};
  nums.forEach(val => {
    hash[val] = (hash[val] || 0) + 1;
  });
  let max = 0;
  Object.keys(hash).forEach(val => {
    const sum = hash[val] + hash[Number(val) + 1];
    if (max < sum) {
      max = sum;
    }
  });

  return max;
};
