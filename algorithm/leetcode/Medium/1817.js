/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
const findingUsersActiveMinutes = function (logs, k) {
  const map = new Map();
  logs.forEach(([id, time]) => {
    const tmp = map.get(id) || [];
    tmp.push(time);
    map.set(id, tmp);
  });
  const ans = Array(k).fill(0);
  map.forEach(val => {
    ans[new Set(val).size - 1] += 1;
  });
  return ans;
};
