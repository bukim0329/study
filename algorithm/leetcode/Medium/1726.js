/**
 * @param {number[]} nums
 * @return {number}
 */
const tupleSameProduct = function (nums) {
  let ans = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const mul = nums[i] * nums[j];
      map.set(mul, map.get(mul) ? map.get(mul) + 1 : 1);
    }
  }
  [...map.values()].forEach(val => {
    ans += (val - 1) * val * 4;
  });
  return ans;
};
