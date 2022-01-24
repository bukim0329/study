/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  let num = 0;
  for (let i = 0; i < flowerbed.length; i += 1) {
    if (flowerbed[i] === 0 && (flowerbed[i - 1] || 0) === 0 && (flowerbed[i + 1] || 0) === 0) {
      flowerbed[i] = 1;
      num += 1;
    }
  }
  return num >= n;
};
