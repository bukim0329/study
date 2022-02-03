/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = function (board) {
  let ans = 0;
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board[0].length; col += 1) {
      if (board[row][col] === 'X' && board[row][col - 1] !== 'X' && (!board[row - 1] || board[row - 1][col] !== 'X')) {
        ans += 1;
      }
    }
  }
  return ans;
};
