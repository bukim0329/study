/**
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = function (tiles) {
  const map = new Map();
  tiles.split('').forEach(tile => {
    map.set(tile, (map.get(tile) || 0) + 1);
  });
  const backtracking = map => {
    let ret = 0;
    for (const [tile, num] of map.entries()) {
      if (num > 0) {
        ret += 1;
        map.set(tile, map.get(tile) - 1);
        ret += backtracking(map);
        map.set(tile, map.get(tile) + 1);
      }
    }
    return ret;
  };
  return backtracking(map);
};
