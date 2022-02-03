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
const goodNodes = function (root) {
  const dfs = (root, max) => {
    if (!root) {
      return 0;
    }
    let ans = 0;
    if (root.val >= max) {
      ans += 1;
      max = root.val;
    }
    ans += dfs(root.left, max);
    ans += dfs(root.right, max);
    return ans;
  };
  return dfs(root, -Infinity);
};
