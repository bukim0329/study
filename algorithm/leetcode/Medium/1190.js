/**
 * @param {string} s
 * @return {string}
 */
const reverseParentheses = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ')') {
      const tmp = [];
      while (stack[stack.length - 1] !== '(') {
        tmp.push(stack.pop());
      }
      stack.pop();
      tmp.forEach(val => {
        stack.push(val);
      });
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
};
