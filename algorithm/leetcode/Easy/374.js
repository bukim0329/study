/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function (n) {
  let down = 1;
  let up = n;
  let mid = Math.floor((down + up) / 2);
  while (guess(mid) !== 0) {
    if (guess(mid) < 0) {
      up = mid - 1;
    } else {
      down = mid + 1;
    }
    mid = Math.floor((down + up) / 2);
  }

  return mid;
};
