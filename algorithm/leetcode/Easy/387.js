/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  const set = [...new Set(s)];
  for (let i = 0; i < set.length; i += 1) {
    const ind = s.indexOf(set[i]);
    if (ind === s.lastIndexOf(set[i])) {
      return ind;
      }
  }

  return -1;
};
    