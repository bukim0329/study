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
const largestValues = function (root) {
  if (!root) {
    return [];
  }
  const ans = [];
  let stack = [root];
  while (stack.length > 0) {
    const tmpStack = [];
    const values = [];
    while (stack.length > 0) {
      const tmp = stack.pop();
      values.push(tmp.val);
      if (tmp.left) tmpStack.push(tmp.left);
      if (tmp.right) tmpStack.push(tmp.right);
    }
    ans.push(Math.max(...values));
    stack = tmpStack;
  }

  return ans;
};
