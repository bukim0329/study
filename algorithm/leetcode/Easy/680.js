/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  let num1 = 0;
  let num2 = 0;
  let str1 = s;
  let str2 = s;
  while (str1.length > 1 && num1 < 2) {
    if (str1[0] === str1[str1.length - 1]) {
      str1 = str1.slice(1, -1);
    } else {
      str1 = str1.slice(0, -1);
      num1 += 1;
    }
  }
  while (str2.length > 1 && num2 < 2) {
    if (str2[0] === str2[str2.length - 1]) {
      str2 = str2.slice(1, -1);
    } else {
      str2 = str2.slice(1);
      num2 += 1;
    }
  }
  return num1 < 2 || num2 < 2;
};
