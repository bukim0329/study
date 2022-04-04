/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function (nums) {
  const ret = [];
  const stack = [];

  if (!nums || nums.length < 1) return ret;

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      const smallerEleIndexFromStack = stack.pop();
      ret[smallerEleIndexFromStack] = nums[i];
    }
    stack.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
      const smallerEleIndexFromStack = stack.pop();
      ret[smallerEleIndexFromStack] = nums[i];
    }
  }

  const remaining = stack.length;
  for (let i = 0; i < remaining; i++) {
    ret[stack.pop()] = -1;
  }

  return ret;
};
