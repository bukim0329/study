/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  const words = s.match(/[a-zA-Z]{1,}/g);

  return words[words.length - 1].length;
};
