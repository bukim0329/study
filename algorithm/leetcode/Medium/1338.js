/**
 * @param {number[]} arr
 * @return {number}
 */
const minSetSize = function (arr) {
  const map = new Map();
  arr.forEach(val => {
    map.set(val, (map.get(val) || 0) + 1);
  });
  const val = [...map.values()];
  val.sort((a, b) => b - a);
  let sum = 0;
  let ans = 0;
  while (sum < arr.length / 2) {
    sum += val[ans];
    ans += 1;
  }

  return ans;
};
