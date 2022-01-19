/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = function (distance, start, destination) {
  const [begin, end] = start < destination ? [start, destination] : [destination, start];
  const sum = distance.reduce((acc, cur) => acc + cur, 0);
  const path = distance.slice(begin, end).reduce((acc, cur) => acc + cur, 0);

  return Math.min(sum - path, path);
};
