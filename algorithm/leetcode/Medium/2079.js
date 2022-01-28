/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
const wateringPlants = function (plants, capacity) {
  let ans = 0;
  plants.reduce((acc, cur, ind) => {
    if (acc + cur <= capacity) {
      ans += 1;
      return acc + cur;
    }
    ans += 2 * ind + 1;
    return cur;
  }, 0);

  return ans;
};
