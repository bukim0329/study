/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = function (root) {
  const sum = new Map();
  const dfs = (root, depth) => {
    if (!root) {
      return;
    }
    sum.set(depth, (sum.get(depth) || 0) + root.val);
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  };
  dfs(root, 0);

  return [...sum.entries()].sort((a, b) => b[1] - a[1])[0][0] + 1;
};
