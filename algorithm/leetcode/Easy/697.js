/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function (nums) {
  const hash = {};
  nums.forEach(val => {
    hash[val] ? (hash[val] += 1) : (hash[val] = 1);
  });
  const max = Math.max(...Object.values(hash));
  const elem = [];
  Object.entries(hash).forEach(val => {
    if (val[1] === max) {
      elem.push(Number(val[0]));
    }
  });
  let ans = Infinity;
  elem.forEach(val => {
    const len = nums.lastIndexOf(val) - nums.indexOf(val) + 1;
    ans = len < ans ? len : ans;
  });
  return ans;
};
