/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
  let stairs = 0;
  let row = 1;
  while (1) {
    stairs += row;
    if (n < stairs) {
      row -= 1;
      break;
    }
    row += 1;
  }

  return row;
};
