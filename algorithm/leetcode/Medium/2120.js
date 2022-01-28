/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
const executeInstructions = function (n, startPos, s) {
  return s.split('').map((val, ind, arr) => {
    const coor = startPos.slice();
    for (let i = ind; i < s.length; i += 1) {
      switch (arr[i]) {
        case 'L':
          if (coor[1] < 1) {
            return i - ind;
          }
          coor[1] -= 1;
          break;

        case 'R':
          if (coor[1] > n - 2) {
            return i - ind;
          }
          coor[1] += 1;
          break;

        case 'U':
          if (coor[0] < 1) {
            return i - ind;
          }
          coor[0] -= 1;
          break;

        case 'D':
          if (coor[0] > n - 2) {
            return i - ind;
          }
          coor[0] += 1;
          break;

        default:
      }
    }

    return s.length - ind;
  });
};
