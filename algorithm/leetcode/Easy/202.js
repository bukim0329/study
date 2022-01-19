/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const hash = {};
  let num = n;
  while (!hash[num]) {
    hash[num] = true;
    num = String(num)
      .split('')
      .reduce((acc, cur) => acc + Number(cur) ** 2, 0);
  }

  return num === 1;
};
