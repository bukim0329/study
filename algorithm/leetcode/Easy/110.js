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
const isBalanced = function (root) {
  const getDepth = root => {
    if (root === null) {
      return 0;
    }
    const left = getDepth(root.left);
    const right = getDepth(root.right);

    return Math.abs(left - right) > 1 ? Infinity : Math.max(left, right) + 1;
  };

  return getDepth(root) !== Infinity;
};
