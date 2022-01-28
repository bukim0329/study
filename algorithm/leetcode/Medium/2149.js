/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function (nums) {
  const pos = [];
  const neg = [];
  nums.forEach(val => {
    val > 0 ? pos.push(val) : neg.push(val);
  });

  return Array.from(Array(nums.length), (_, ind) => (ind % 2 === 0 ? pos[ind / 2] : neg[(ind - 1) / 2]));
};
