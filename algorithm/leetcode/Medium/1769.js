/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function (boxes) {
  return boxes.split('').map((_, ind, boxes) => {
    let ret = 0;
    boxes.forEach((val, box) => {
      if (Number(val) === 1) {
        ret += Math.abs(box - ind);
      }
    });
    return ret;
  });
};
