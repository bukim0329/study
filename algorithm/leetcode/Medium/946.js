/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function(pushed, popped) {
  const stack = [];
  let popInd = 0;
  pushed.forEach(val => {
    stack.push(val);
    while (stack.length > 0 && stack[stack.length - 1] === popped[popInd]) {
      stack.pop();
      popInd += 1;
    }
  });
  
  return popInd === popped.length;
};
