/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
const shipWithinDays = function (weights, days) {
  let start = Math.max(...weights);
  let end = weights.reduce((acc, cur) => acc + cur, 0);
  const getDays = (weights, max) => {
    let num = 1;
    weights.reduce((acc, cur) => {
      if (acc + cur > max) {
        num += 1;
        return cur;
      }
      return acc + cur;
    }, 0);
    return num;
  };
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (getDays(weights, mid) > days) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};
