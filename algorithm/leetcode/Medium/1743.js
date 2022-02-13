/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
const restoreArray = function (adjacentPairs) {
  const map = new Map();
  adjacentPairs.forEach(val => {
    const tmp1 = map.get(val[0]) || [];
    const tmp2 = map.get(val[1]) || [];
    tmp1.push(val[1]);
    tmp2.push(val[0]);
    map.set(val[0], tmp1);
    map.set(val[1], tmp2);
  });
  const ans = [];
  const entries = [...map.entries()];
  for (let i = 0; i < entries.length; i += 1) {
    if (entries[i][1].length === 1) {
      ans.push(entries[i][0]);
      break;
    }
  }
  while (ans.length < adjacentPairs.length + 1) {
    const [a, b] = map.get(ans[ans.length - 1]);
    ans.push(a === ans[ans.length - 2] ? b : a);
  }
  return ans;
};
