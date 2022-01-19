/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const countOdds = function (low, high) {
  if ((high - low) % 2 === 1) {
    return (high - low + 1) / 2;
  }

  return low % 2 === 1 ? (high - low) / 2 + 1 : (high - low) / 2;
};
