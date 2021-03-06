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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
  const isSameTree = (root1, root2) => {
    if (!(root1 && root2)) {
      return !root1 && !root2;
    }
    if (root1.val !== root2.val) {
      return false;
    }
    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
  };
  if (root === null) {
    return false;
  }

  return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
