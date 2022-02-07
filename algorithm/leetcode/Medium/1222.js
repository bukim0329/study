/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
const queensAttacktheKing = function (queens, king) {
  const flag = [1, 1, 1, 1, 1, 1, 1, 1];
  const coor = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
  ];
  const kingCoor = new Array(8).fill(king);
  const ans = [];
  while (!flag.every(val => val === 0)) {
    for (let i = 0; i < 8; i += 1) {
      if (flag[i]) {
        const x = kingCoor[i][0] + coor[i][0];
        const y = kingCoor[i][1] + coor[i][1];
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
          kingCoor[i] = [x, y];
          if (queens.some(([qx, qy]) => qx === x && qy === y)) {
            ans.push([x, y]);
            flag[i] = 0;
          }
        } else {
          flag[i] = 0;
        }
      }
    }
  }
  return ans;
};
