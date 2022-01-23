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
const findMode = function (root) {
  const hash = {};
  const rec = root => {
    if (root === null) {
      return;
    }
    hash[root.val] = (hash[root.val] || 0) + 1;
    rec(root.left);
    rec(root.right);
  };
  rec(root);
  const max = Math.max(...Object.values(hash));

  return Object.keys(hash).filter(val => hash[val] === max);
};
