/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = function (arr, k) {
  const map = new Map();
  arr.forEach(val => {
    const cnt = map.get(val) ?? 0;
    map.set(val, cnt + 1);
  });
  const hash = [...map].sort((a, b) => a[1] - b[1]);
  let num = 0;
  for (let i = 0; i < hash.length; i += 1) {
    if (num + hash[i][1] > k) return hash.length - i;
    if (num + hash[i][1] === k) return hash.length - i - 1;
    num += hash[i][1];
  }
  return 0;
};
