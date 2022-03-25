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
 * @return {number[]}
 */
const findFrequentTreeSum = function (root) {
  const map = new Map();
  const dfs = root => {
    if (!root) {
      return 0;
    }
    const left = dfs(root.left);
    const right = dfs(root.right);
    map.set(root.val + left + right, (map.get(root.val + left + right) || 0) + 1);

    return left + right + root.val;
  };
  dfs(root);
  const entries = [...map].sort((a, b) => b[1] - a[1]);
  const ans = [];
  for (let i = 0; i < entries.length; i += 1) {
    if (entries[0][1] !== entries[i][1]) {
      break;
    }
    ans.push(entries[i][0]);
  }

  return ans;
};
