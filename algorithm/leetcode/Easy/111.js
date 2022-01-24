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

/* dfs */
const minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  if (!root.left || !root.right) {
    return (root.left ? minDepth(root.left) : minDepth(root.right)) + 1;
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

/* bfs */
const minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  const stack = [root];
  let ans = 1;
  while (stack.length) {
    const inner = [...stack];
    stack.length = 0;
    while (inner.length) {
      const tmp = inner.pop();
      if (!tmp.left && !tmp.right) {
        return ans;
      }
      if (tmp.left) {
        stack.push(tmp.left);
      }
      if (tmp.right) {
        stack.push(tmp.right);
      }
    }
    ans += 1;
  }

  return ans;
};
