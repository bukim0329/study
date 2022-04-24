/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = (n, connections) => {
  let count = 0;
  const graph = [];
  const set = new Set();
  const dfs = (node, parent) => {
    if (set.has(`${parent}#${node}`)) count += 1;

    for (const nei of graph[node]) {
      if (nei !== parent) dfs(nei, node);
    }
  };

  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (const [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
    set.add(`${u}#${v}`);
  }

  dfs(0, -1);

  return count;
};
