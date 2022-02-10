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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const constructFromPrePost = function (preorder, postorder) {
  if (preorder.length === 0) {
    return null;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }
  const preStd = preorder.indexOf(postorder[postorder.length - 2]);
  const postStd = preStd - 1;
  return new TreeNode(
    preorder[0],
    constructFromPrePost(preorder.slice(1, preStd), postorder.slice(0, postStd)),
    constructFromPrePost(preorder.slice(preStd), postorder.slice(postStd, -1))
  );
};
