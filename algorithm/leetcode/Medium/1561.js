/**
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = function (piles) {
  let ans = 0;
  let start = 0;
  let last = piles.length - 1;
  piles.sort((a, b) => a - b);
  while (start < last) {
    start += 1;
    ans += piles[last - 1];
    last -= 2;
  }

  return ans;
};
