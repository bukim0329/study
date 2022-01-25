/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = function (text, first, second) {
  const ans = [];
  text.split(' ').forEach((word, ind, arr) => {
    if (word === first && arr[ind + 1] === second && arr[ind + 2]) {
      ans.push(arr[ind + 2]);
    }
  });

  return ans;
};
