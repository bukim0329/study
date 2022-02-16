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
 * @return {number}
 */
const pseudoPalindromicPaths = function (root) {
  const dfs = (root, bits) => {
    if (!root) {
      return 0;
    }
    bits[root.val - 1] ^= 1;
    if (!root.left && !root.right) {
      return bits.reduce((acc, cur) => acc + cur, 0) < 2 ? 1 : 0;
    }
    return dfs(root.left, [...bits]) + dfs(root.right, [...bits]);
  };
  return dfs(root, [0, 0, 0, 0, 0, 0, 0, 0, 0]);
};
