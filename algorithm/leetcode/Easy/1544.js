/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
      if ((stack[stack.length - 1] || '').toLowerCase() === s[i].toLowerCase() && stack[stack.length - 1] !== s[i]) {
          stack.pop();
      } else {
          stack.push(s[i]);
      }
  }

  return stack.join('');
};