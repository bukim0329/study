/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
  const coor = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const isLive = (val, row, col) => {
    let live = 0;
    coor.forEach(([dx, dy]) => {
      if (
        row + dx >= 0 &&
        row + dx < board.length &&
        col + dy >= 0 &&
        col + dy < board[0].length &&
        board[row + dx][col + dy] === 1
      ) {
        live += 1;
      }
    });
    return (val === 1 && (live === 2 || live === 3)) || (val === 0 && live === 3);
  };
  const ans = board.map((arr, row) => arr.map((val, col) => (isLive(val, row, col) ? 1 : 0)));
  ans.forEach((arr, row) => arr.forEach((val, col) => (board[row][col] = val)));
};
