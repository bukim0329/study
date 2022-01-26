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
const deepestLeavesSum = function (root) {
  const map = new Map();
  const dfs = (root, depth) => {
    if (root.left === null && root.right === null) {
      map.set(depth, (map.get(depth) || 0) + root.val);
    }
    if (root.left) {
      dfs(root.left, depth + 1);
    }
    if (root.right) {
      dfs(root.right, depth + 1);
    }
  };
  dfs(root, 0);
  return map.get(Math.max(...map.keys()));
};
