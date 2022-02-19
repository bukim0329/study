/**
 * @param {string} s
 * @return {number}
 */
const minSwaps = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return Math.ceil(stack.length / 4);
};
