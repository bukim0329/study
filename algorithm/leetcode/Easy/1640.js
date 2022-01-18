/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
const canFormArray = function (arr, pieces) {
  return pieces.every(p => p.toString() === arr.slice(arr.indexOf(p[0]), arr.indexOf(p[0]) + p.length).toString());
};
