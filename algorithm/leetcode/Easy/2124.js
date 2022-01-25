/**
 * @param {string} s
 * @return {boolean}
 */
const checkString = function (s) {
  return s.indexOf('b') >= 0 ? s.lastIndexOf('a') < s.indexOf('b') : true;
};
