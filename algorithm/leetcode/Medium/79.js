/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
  const dfs = (row, col, num, visited) => {
    if (word.length === num + 1) {
      return true;
    }
    visited[row][col] = true;
    let flag = false;
    if (
      row > 0 &&
      !visited[row - 1][col] &&
      board[row - 1][col] === word[num + 1] &&
      dfs(row - 1, col, num + 1, visited)
    )
      flag = true;
    if (
      row < board.length - 1 &&
      !visited[row + 1][col] &&
      board[row + 1][col] === word[num + 1] &&
      dfs(row + 1, col, num + 1, visited)
    )
      flag = true;
    if (
      col > 0 &&
      !visited[row][col - 1] &&
      board[row][col - 1] === word[num + 1] &&
      dfs(row, col - 1, num + 1, visited)
    )
      flag = true;
    if (
      col < board[0].length - 1 &&
      !visited[row][col + 1] &&
      board[row][col + 1] === word[num + 1] &&
      dfs(row, col + 1, num + 1, visited)
    )
      flag = true;
    visited[row][col] = false;
    return flag;
  };
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (word[0] === board[i][j]) {
        const visited = Array.from({ length: board.length }, () =>
          Array.from({ length: board[0].length }, () => false)
        );
        if (dfs(i, j, 0, visited) === true) return true;
      }
    }
  }
  return false;
};
