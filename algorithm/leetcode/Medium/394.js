/**
 * @param {string} s
 * @return {string}
 */
const decodeString = s => {
  if (!s.includes('[')) {
    return s;
  }
  const pair = [];
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '[') {
      stack.push(i);
    } else if (s[i] === ']') {
      if (stack.length === 1) {
        pair.push(stack.pop(), i);
        break;
      } else {
        stack.pop();
      }
    }
  }
  const num = s.match(/[0-9]{1,}/);

  return s.slice(0, num.index) + decodeString(s.slice(pair[0] + 1, pair[1]).repeat(num[0]) + s.slice(pair[1] + 1));
};
