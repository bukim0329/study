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
 var getMinimumDifference = function(root) {
  let min = Infinity;
  let prev = -Infinity;
  function inorder(root) {
      if (!root) {
          return min;
      }
      inorder(root.left);
      min = Math.min(min, root.val - prev);
      prev = root.val;
      inorder(root.right);
  }
  inorder(root);
  return min;
};