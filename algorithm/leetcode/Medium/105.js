/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }
  if (inorder.length === 1) {
    return new TreeNode(inorder[0]);
  }
  const std = inorder.indexOf(preorder[0]);

  return new TreeNode(
    preorder[0],
    buildTree(preorder.slice(1, std + 1), inorder.slice(0, std)),
    buildTree(preorder.slice(std + 1), inorder.slice(std + 1))
  );
};
