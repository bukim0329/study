/**
 * @param {string} s
 * @return {number}
 */
const numberOfSubstrings = function (s) {
  let A = 0;
  let B = 0;
  let C = 0;
  let res = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (s[i] === 'a') A++;
    if (s[i] === 'b') B++;
    if (s[i] === 'c') C++;
    while (A && B && C) {
      res += s.length - i;
      if (s[j] === 'a') A--;
      if (s[j] === 'b') B--;
      if (s[j] === 'c') C--;
      j++;
    }
  }
  return res;
};
