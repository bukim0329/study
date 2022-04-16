/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
const getSame = (x1, y1, x2, y2, img1, img2) => {
  let ret = 0;
  for (let i = 0; i < img1.length; i += 1) {
    for (let j = 0; j < img1.length; j += 1) {
      if (
        x1 + i < img1.length &&
        y1 + j < img1.length &&
        x2 + i < img1.length &&
        y2 + j < img1.length &&
        img1[x1 + i][y1 + j] === 1 &&
        img1[x1 + i][y1 + j] === img2[x2 + i][y2 + j]
      ) {
        ret += 1;
      }
    }
  }

  return ret;
};

const largestOverlap = function (img1, img2) {
  let max = -1;
  for (let i = 0; i < img1.length; i += 1) {
    for (let j = 0; j < img1.length; j += 1) {
      for (let a = 0; a < img1.length; a += 1) {
        for (let b = 0; b < img1.length; b += 1) {
          max = Math.max(max, getSame(i, j, a, b, img1, img2));
        }
      }
    }
  }

  return max;
};
