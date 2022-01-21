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
 * @return {boolean}
 */
const isSymmetric = function (root) {
  const rec = (left, right) => {
    if (!left && !right) {
      return true;
    }
    if (left && right && left.val === right.val) {
      const t1 = rec(left.left, right.right);
      const t2 = rec(left.right, right.left);
      return t1 && t2;
    }
    return false;
  };

  return rec(root.left, root.right);
};
