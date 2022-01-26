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
const sumEvenGrandparent = function (root) {
  if (root === null) {
    return 0;
  }
  let ans = 0;
  if (root.val % 2 === 0) {
    if (root.left && root.left.left) {
      ans += root.left.left.val;
    }
    if (root.left && root.left.right) {
      ans += root.left.right.val;
    }
    if (root.right && root.right.left) {
      ans += root.right.left.val;
    }
    if (root.right && root.right.right) {
      ans += root.right.right.val;
    }
  }
  ans += sumEvenGrandparent(root.left);
  ans += sumEvenGrandparent(root.right);

  return ans;
};
