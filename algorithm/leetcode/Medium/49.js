/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = new Map();
  strs.forEach(str => {
    const tmp = [...str].sort().join('');
    const stack = map.get(tmp) || [];
    stack.push(str);
    map.set(tmp, stack);
  });

  return [...map.values()];
};
