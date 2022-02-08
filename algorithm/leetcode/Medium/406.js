/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function (people) {
  people.sort(([hi, ki], [hj, kj]) => (hi !== hj ? hj - hi : ki - kj));
  const ans = [];
  people.forEach(val => {
    ans.splice(val[1], 0, val);
  });
  return ans;
};
