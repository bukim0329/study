/**
 * @param {string} word
 * @return {number}
 */
const countVowelSubstrings = function (word) {
  const vowel = 'aeiou';
  let ans = 0;
  for (let i = 0; i < word.length; i += 1) {
    let str = '';
    let j = 0;
    while (vowel.includes(word[i + j])) {
      str += word[i + j];
      if (new Set(str).size === 5) {
        ans += 1;
      }
      j += 1;
    }
  }

  return ans;
};
