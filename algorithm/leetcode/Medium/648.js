/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = function (dictionary, sentence) {
  dictionary.sort((a, b) => a.length - b.length);
  return sentence
    .split(' ')
    .map(word => {
      for (let i = 0; i < dictionary.length; i += 1) {
        if (word.startsWith(dictionary[i])) {
          return dictionary[i];
        }
      }
      return word;
    })
    .join(' ');
};
