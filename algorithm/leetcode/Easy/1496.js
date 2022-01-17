/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function (path) {
  const xCoor = [0];
  const yCoor = [0];
  const coor = {
    '00': true,
  };
  for (let i = 0; i < path.length; i += 1) {
    if (path[i] === 'N') {
      xCoor[i + 1] = xCoor[i];
      yCoor[i + 1] = yCoor[i] + 1;
    } else if (path[i] === 'E') {
      xCoor[i + 1] = xCoor[i] + 1;
      yCoor[i + 1] = yCoor[i];
    } else if (path[i] === 'S') {
      xCoor[i + 1] = xCoor[i];
      yCoor[i + 1] = yCoor[i] - 1;
    } else {
      xCoor[i + 1] = xCoor[i] - 1;
      yCoor[i + 1] = yCoor[i];
    }
    if (coor[xCoor[i + 1] + '' + yCoor[i + 1]]) return true;
    coor[xCoor[i + 1] + '' + yCoor[i + 1]] = true;
  }

  return false;
};
