/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = function (rooms) {
  let stack = [...rooms[0]];
  const visited = Array.from({ length: rooms.length }, () => false);
  visited[0] = true;
  while (stack.length > 0) {
    const key = stack.pop();
    if (visited[key] === false) {
      visited[key] = true;
      stack = [...stack, ...rooms[key]];
    }
  }
  return visited.every(val => val === true);
};
