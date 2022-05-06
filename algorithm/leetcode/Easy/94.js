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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const ans = [];
  ans.push(...inorderTraversal(root.left));
  ans.push(root.val);
  ans.push(...inorderTraversal(root.right));

  return ans;
};
