/**
 * @param {string} target
 * @return {number}
 */
const minFlips = function (target) {
  let flag = 0;
  let ans = 0;
  for (let i = 0; i < target.length; i += 1) {
    if (flag === 0 && target[i] === '1') {
      flag += 1;
      ans += 1;
    } else if (flag === 1 && target[i - 1] !== target[i]) {
      ans += 1;
    }
  }
  return ans;
};
