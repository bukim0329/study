/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    switch (s[i]) {
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
        break;
      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
        break;
      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop();
        } else {
          stack.push(s[i]);
        }
        break;
      default:
        stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
