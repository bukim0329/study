/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const ans = [];
  const rec = (path, graph, start, end) => {
    if (start === end) {
      ans.push([...path]);
      return path;
    }
    graph[start].forEach(val => {
      path.push(val);
      rec(path, graph, val, end);
      path.pop();
    });
  };
  rec([0], graph, 0, graph.length - 1);
  return ans;
};
