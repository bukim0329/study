/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function (preorder) {
  if (preorder.length === 0) {
    return null;
  }
  let ind = preorder.length;
  for (let i = 1; i < preorder.length; i += 1) {
    if (preorder[0] < preorder[i]) {
      ind = i;
      break;
    }
  }
  return new TreeNode(preorder[0], bstFromPreorder(preorder.slice(1, ind)), bstFromPreorder(preorder.slice(ind)));
};
