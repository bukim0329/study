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
const findBottomLeftValue = function (root) {
  const ans = [];
  const inorder = (root, depth) => {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      ans.push([root.val, depth]);
      return;
    }
    inorder(root.left, depth + 1);
    inorder(root.right, depth + 1);
  };
  inorder(root, 0);
  return ans.sort((a, b) => b[1] - a[1])[0][0];
};
