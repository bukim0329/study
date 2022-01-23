/**
 * @param {string} text
 * @return {string}
 */
const reorderSpaces = function (text) {
  const words = text.match(/[a-z]{1,}/g);
  const blank = (text.match(/[ ]/g) || []).length;
  return words.length === 1
    ? words[0] + ' '.repeat(blank)
    : words.join(' '.repeat(Math.floor(blank / (words.length - 1)))) + ' '.repeat(blank % (words.length - 1));
};
