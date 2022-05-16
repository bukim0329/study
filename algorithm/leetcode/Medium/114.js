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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = root => {
  if (!root) {
    return;
  }
  flatten(root.left);
  flatten(root.right);
  if (root.left) {
    const rightNode = root.right;
    let ptr = root.left;
    while (ptr.right) {
      ptr = ptr.right;
    }
    ptr.right = rightNode;
    root.right = root.left;
    root.left = null;
  }
};
