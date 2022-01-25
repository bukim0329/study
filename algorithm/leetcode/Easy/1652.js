/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
  const lcode = [...code, ...code];
  if (k === 0) {
    return Array(code.length).fill(0);
  }
  if (k > 0) {
    return code.map((_, ind) => lcode.slice(ind + 1, ind + 1 + k).reduce((acc, cur) => acc + cur, 0));
  }
  return code.map((_, ind) => lcode.slice(code.length + k + ind, code.length + ind).reduce((acc, cur) => acc + cur, 0));
};
