/**
 * @param {string} text
 * @return {string}
 */
const arrangeWords = function (text) {
  const sentence = text
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .join(' ');
  return sentence[0].toUpperCase() + sentence.slice(1).toLowerCase();
};
