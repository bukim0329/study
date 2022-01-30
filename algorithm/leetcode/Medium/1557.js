/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = function (n, edges) {
  const fromSet = new Set();
  const toSet = new Set();
  edges.forEach(([from, to]) => {
    fromSet.add(from);
    toSet.add(to);
  });
  [...toSet].forEach(val => {
    if (fromSet.has(val)) {
      fromSet.delete(val);
    }
  });

  return [...fromSet];
};
