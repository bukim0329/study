/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = function (n, edges, source, destination) {
  if (source === destination) {
    return true;
  }
  const stack = [source];
  while (stack.length > 0) {
    const start = stack.pop();
    for (let i = 0; i < edges.length; i += 1) {
      if (edges[i].includes(start)) {
        const end = edges[i][0] !== start ? edges[i][0] : edges[i][1];
        if (end === destination) {
          return true;
        }
        stack.push(end);
        edges.splice(i, 1, [-1, -1]);
      }
      console.log(stack, edges);
    }
  }

  return false;
};
