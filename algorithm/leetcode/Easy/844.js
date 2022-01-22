/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function (s, t) {
  const mkStr = str => {
    const stack = [];
    str.split('').forEach(val => {
      val === '#' ? stack.pop() : stack.push(val);
    });

    return stack.join('');
  };

  return mkStr(s) === mkStr(t);
};
