/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const ans = [];
  while (columnNumber > 0) {
    columnNumber -= 1;
    ans.push(letter[columnNumber % 26]);
    columnNumber = Math.floor(columnNumber / 26);
  }

  return ans.reverse().join('');
};
