/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }
  for (let i = 0; i < haystack.length; i += 1) {
    if (haystack[i] === needle[0]) {
      let flag = true;
      for (let j = 0; j < needle.length; j += 1) {
        if (haystack[i + j] !== needle[j]) {
          flag = false;
        }
      }
      if (flag) {
        return i;
      }
    }
  }
  return -1;
};
