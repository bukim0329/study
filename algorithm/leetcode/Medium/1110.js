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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const delNodes = function (root, to_delete) {
  const ans = [];
  const getNodes = (root, to_delete, isRoot) => {
    if (!root) {
      return null;
    }
    if (!to_delete.includes(root.val)) {
      const tmp = new TreeNode(root.val, getNodes(root.left, to_delete, 0), getNodes(root.right, to_delete, 0));
      if (isRoot === 1) {
        ans.push(tmp);
      }
      return tmp;
    }
    getNodes(root.left, to_delete, 1);
    getNodes(root.right, to_delete, 1);
    return null;
  };
  getNodes(root, to_delete, 1);

  return ans;
};
