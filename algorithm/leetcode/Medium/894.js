/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
class TreeNode {}
const allPossibleFBT = function (n) {
  if (n === 1) {
    return [new TreeNode(0)];
  }
  const ans = [];
  for (let i = 0; i < (n - 1) / 2; i += 1) {
    const left = allPossibleFBT(2 * i + 1);
    const right = allPossibleFBT(n - 2 * (i + 1));
    left.forEach(leftNode => {
      right.forEach(rightNode => {
        ans.push(new TreeNode(0, leftNode, rightNode));
      });
    });
  }

  return ans;
};
