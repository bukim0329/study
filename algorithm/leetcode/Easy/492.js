/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function (area) {
  let num = Math.ceil(Math.sqrt(area));
  while (num < area) {
    if (area % num === 0) {
      return [num, area / num];
    }
    num += 1;
  }

  return [num, 1];
};
