/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = function (sequence, word) {
  let ans = 1;
  while (sequence.includes(word.repeat(ans))) {
    ans += 1;
  }
  return ans - 1;
};
