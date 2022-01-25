/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = function (rings) {
  const map = new Map();
  for (let i = 0; i < rings.length; i += 2) {
    map.set(rings[i + 1], (map.get(rings[i + 1]) || '') + rings[i]);
  }

  return [...map.values()].reduce((acc, cur) => (new Set(cur).size === 3 ? acc + 1 : acc), 0);
};
