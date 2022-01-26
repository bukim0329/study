/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function (groupSizes) {
  const map = new Map();
  const ans = [];
  groupSizes.forEach((val, ind) => {
    const tmp = map.get(val) || [];
    tmp.push(ind);
    map.set(val, tmp);
    if (map.get(val).length === val) {
      ans.push(map.get(val));
      map.delete(val);
    }
  });

  return ans;
};
