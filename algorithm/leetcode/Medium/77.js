/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const combination = (arr, num) => {
    if (num === 1) {
      return arr.map(val => [val]);
    }
    const ans = [];
    arr.forEach((fixed, ind) => {
      const combinations = combination(arr.slice(ind + 1), num - 1);
      combinations.forEach(val => {
        ans.push([fixed, ...val]);
      });
    });
    return ans;
  };
  return combination(
    Array.from({ length: n }, (_, ind) => ind + 1),
    k
  );
};
