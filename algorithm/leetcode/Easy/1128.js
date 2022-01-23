/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const numEquivDominoPairs = function (dominoes) {
  const hash = {};
  dominoes.forEach(([num1, num2]) => {
    if (num1 > num2) {
      [num1, num2] = [num2, num1];
    }
    hash[`${num1},${num2}`] = (hash[`${num1},${num2}`] || 0) + 1;
  });

  return Object.values(hash).reduce((acc, cur) => acc + ((cur - 1) * cur) / 2, 0);
};
