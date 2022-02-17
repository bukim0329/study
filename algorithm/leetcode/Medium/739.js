/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const stack = [];
  const ans = [];
  for (let i = 0; i < temperatures.length - 1; i += 1) {
    stack.push(i);
    while (temperatures[stack[stack.length - 1]] < temperatures[i + 1]) {
      const top = stack.pop();
      ans[top] = i + 1 - top;
    }
  }
  stack.forEach(val => {
    ans[val] = 0;
  });
  ans.push(0);

  return ans;
};
