/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const getAllElements = function (root1, root2) {
  const inorder = root => {
    if (root === null) {
      return [];
    }
    const ret = [];
    ret.push(...inorder(root.left));
    ret.push(root.val);
    ret.push(...inorder(root.right));

    return ret;
  };
  return [...inorder(root1), ...inorder(root2)].sort((a, b) => a - b);
};
