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
 * @return {TreeNode}
 */
const bstToGst = function (root) {
  const revInorder = (root, init) => {
    if (root === null) {
      return init;
    }
    root.val += revInorder(root.right, init);
    return revInorder(root.left, root.val);
  };
  revInorder(root, 0);

  return root;
};
