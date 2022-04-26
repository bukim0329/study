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
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const ans = new Map();
  const stack = [[root, 0]];
  let ind = 0;
  while (ind < stack.length) {
    const [par, level] = stack[ind];
    const tmp = ans.get(level) || [];
    tmp.push(par.val);
    ans.set(level, tmp);
    if (par.left) {
      stack.push([par.left, level + 1]);
    }
    if (par.right) {
      stack.push([par.right, level + 1]);
    }
    ind += 1;
  }

  return [...ans.values()];
};
