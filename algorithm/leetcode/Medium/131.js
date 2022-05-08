/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = s => {
  if (s.length <= 1) {
    return [s.split('')];
  }
  const ret = [];
  for (let i = 1; i <= s.length; i += 1) {
    const subStr = s.slice(0, i);
    if (subStr === subStr.split('').reverse().join('')) {
      partition(s.slice(i)).forEach(arr => {
        ret.push([subStr, ...arr]);
      });
    }
  }
  return ret;
};
