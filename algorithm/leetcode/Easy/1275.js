/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = function (moves) {
  const squares = Array.from(Array(3), () => Array(3).fill(0));

  moves.forEach((arr, ind) => {
    squares[arr[0]][arr[1]] = ind % 2 ? 1 : -1;
  });
  for (let i = 0; i < 3; i += 1) {
    let tmp = squares[i].reduce((acc, cur) => acc + cur, 0);
    if (tmp !== 0 && tmp % 3 === 0) return tmp < 0 ? 'A' : 'B';
    tmp = 0;
    for (let j = 0; j < 3; j += 1) {
      tmp += squares[j][i];
    }
    if (tmp !== 0 && tmp % 3 === 0) return tmp < 0 ? 'A' : 'B';
  }
  let tmp = squares[0][0] + squares[1][1] + squares[2][2];
  if (tmp !== 0 && tmp % 3 === 0) return tmp < 0 ? 'A' : 'B';
  tmp = squares[0][2] + squares[1][1] + squares[2][0];
  if (tmp !== 0 && tmp % 3 === 0) return tmp < 0 ? 'A' : 'B';
  return moves.length === 9 ? 'Draw' : 'Pending';
};
