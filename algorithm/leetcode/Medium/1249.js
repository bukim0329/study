/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function (s) {
  const stack = [];
  const ans = [];

  for (let i = 0; i < s.length; i += 1) {
    let ch = s[i];
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length > 0) stack.pop();
      else ch = '';
    }
    ans.push(ch);
  }
  while (stack.length > 0) {
    ans[stack.pop()] = '';
  }
  return ans.join('');
};
