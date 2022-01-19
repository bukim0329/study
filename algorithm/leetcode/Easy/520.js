/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  const wordArr = word.split('');
  return [
    wordArr.map(letter => letter.toUpperCase()).join(''),
    wordArr.map(letter => letter.toLowerCase()).join(''),
    wordArr.map((letter, ind) => (ind === 0 ? letter.toUpperCase() : letter.toLowerCase())).join(''),
  ].includes(word);
};
