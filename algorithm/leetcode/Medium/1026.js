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
const maxAncestorDiff = function (root) {
  let ans = 0;
  const dfs = (root, min, max) => {
    if (!root) {
      return;
    }
    max = Math.max(root.val, max);
    min = Math.min(root.val, min);
    ans = Math.max(ans, Math.abs(root.val - max), Math.abs(root.val - min));
    dfs(root.left, min, max);
    dfs(root.right, min, max);
  };
  dfs(root, root.val, root.val);
  return ans;
};
