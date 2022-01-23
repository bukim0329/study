/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
  const x = coordinates[0][0];
  const y = coordinates[0][1];
  if (coordinates.every(val => val[0] === x)) {
    return true;
  }
  if (coordinates.every(val => val[1] === y)) {
    return true;
  }
  const grad = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
  for (let i = 1; i < coordinates.length; i += 1) {
    if (grad !== (coordinates[i][1] - coordinates[i - 1][1]) / (coordinates[i][0] - coordinates[i - 1][0])) {
      return false;
    }
  }
  return true;
};
