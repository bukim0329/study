/**
 * @param {number} label
 * @return {number[]}
 */
const pathInZigZagTree = function (label) {
  const ans = [label];
  let ind = 0;
  while (2 ** ind <= label) {
    ind += 1;
  }
  while (label > 1) {
    label = 2 ** (ind - 2) + Math.ceil((2 ** ind - label) / 2) - 1;
    ind -= 1;
    ans.push(label);
  }
  return ans.reverse();
};
