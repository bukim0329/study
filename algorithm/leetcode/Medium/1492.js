/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = function (n, k) {
  const findFac = num => {
    const set = new Set();
    for (let i = 1; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        set.add(i);
        set.add(num / i);
      }
    }
    return [...set].sort((a, b) => a - b);
  };
  return findFac(n)[k - 1] || -1;
};
