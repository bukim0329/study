/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const sumEvenAfterQueries = function (nums, queries) {
  return queries.map(([val, index], ind) => {
    nums[index] = nums[index] + val;
    return nums.reduce((acc, cur) => (cur % 2 === 0 ? acc + cur : acc), 0);
  });
};
