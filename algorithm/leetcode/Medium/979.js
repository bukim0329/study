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
 const distributeCoins = function(root) {
  const dfs = root => {
    if (!root) {
      return [0, 0];
    }
    const [leftCoin, leftCost] = dfs(root.left);
    const [rightCoin, rightCost] = dfs(root.right);
    return [leftCoin + rightCoin + root.val - 1, leftCost + rightCost + Math.abs(leftCoin + rightCoin + root.val - 1)];
  }
  
  return dfs(root)[1];
};