/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [s[0]];
  const open = '([{';
  const close = '()[]{}';
  for (let i = 1; i < s.length; i += 1) {
    if (open.includes(s[i])) {
      stack.push(s[i]);
    } else if (close[close.indexOf(s[i]) - 1] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
