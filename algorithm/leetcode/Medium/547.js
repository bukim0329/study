/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  const visited = Array.from({ length: isConnected.length }, () => false);
  const bfs = num => {
    const stack = [num];
    while (stack.length) {
      const tmp = stack.pop();
      visited[tmp] = true;
      isConnected[tmp].forEach((val, ind) => {
        if (val === 1 && !visited[ind]) {
          stack.push(ind);
        }
      });
    }
  };
  let provinces = 0;

  for (let i = 0; i < isConnected.length; i += 1) {
    if (!visited[i]) {
      provinces += 1;
      bfs(i);
    }
  }

  return provinces;
};
