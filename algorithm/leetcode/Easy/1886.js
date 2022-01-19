/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = function (mat, target) {
  const rotMat = [];
  let tmp = mat;
  for (let i = 0; i < 4; i += 1) {
    rotMat.push(tmp.map(arr => arr.join('')).join(','));
    tmp = tmp.map((_, row, tmp) => tmp.map(arr => arr[row]).reverse());
  }
  return rotMat.includes(target.map(arr => arr.join('')).join(','));
};
