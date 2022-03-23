/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
const canReach = function (arr, start) {
  const visited = Array.from({ length: arr.length }, () => true);
  const stack = [start];
  while (stack.length > 0) {
    const tmp = stack.pop();
    if (arr[tmp] === 0) {
      return true;
    }
    visited[tmp] = false;
    if (visited[tmp + arr[tmp]]) {
      stack.push(tmp + arr[tmp]);
    }
    if (visited[tmp - arr[tmp]]) {
      stack.push(tmp - arr[tmp]);
    }
  }

  return false;
};
