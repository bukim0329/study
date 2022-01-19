/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const isPrefixString = function (s, words) {
  let str = words[0];
  let ind = 1;
  while (str !== s && s.includes(str)) {
    str += words[ind];
    ind += 1;
  }
  return str === s;
};
