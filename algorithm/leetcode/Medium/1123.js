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
const lcaDeepestLeaves = function (root) {
  let maxDepth = 0;
  let ans = root;
  const findDepth = (root, depth) => {
    if (!root) {
      return depth - 1;
    }
    const left = findDepth(root.left, depth + 1);
    const right = findDepth(root.right, depth + 1);
    if (left === right && maxDepth <= left) {
      maxDepth = left;
      ans = root;
    }
    return Math.max(left, right);
  };
  findDepth(root, 0);
  return ans;
};
