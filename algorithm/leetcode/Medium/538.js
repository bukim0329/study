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
const convertBST = function (root) {
  const getSum = (root, val) => {
    if (!root) {
      return val;
    }
    root.val += getSum(root.right, val);
    return getSum(root.left, root.val);
  };
  getSum(root, 0);

  return root;
};
