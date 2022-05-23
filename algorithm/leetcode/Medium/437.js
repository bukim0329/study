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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = (root, sum) => {
  if (!root) return 0;
  const helper = (root, sum) => {
    if (!root) return 0;
    const self = root.val === sum ? 1 : 0;
    return self + helper(root.left, sum - root.val) + helper(root.right, sum - root.val);
  };

  return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};
