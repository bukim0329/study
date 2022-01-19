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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function (root, x, y) {
  const findDepth = (root, value, depth) => {
    if (root === null) {
      return 0;
    }
    if (root.val === value) {
      return depth;
    }
    return findDepth(root.left, value, depth + 1) ^ findDepth(root.right, value, depth + 1);
  };

  const findParent = (root, value) => {
    if (root === null) {
      return null;
    }
    if ((root.left && root.left.val === value) || (root.right && root.right.val === value)) {
      return root;
    }
    return findParent(root.left, value) || findParent(root.right, value);
  };

  return findDepth(root, x, 0) === findDepth(root, y, 0) && findParent(root, x).val !== findParent(root, y).val;
};
