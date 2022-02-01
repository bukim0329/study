/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class FindElements {
  /**
   * @param {TreeNode} root
   */
  constructor(root) {
    const dfs = (root, val) => {
      if (!root) {
        return;
      }
      root.val = val;
      dfs(root.left, val * 2 + 1);
      dfs(root.right, val * 2 + 2);
    };
    dfs(root, 0);
    this.root = root;
  }

  /**
   * @param {number} target
   * @return {boolean}
   */
  find(target) {
    const dfs = (root, target) => {
      if (!root) {
        return false;
      }
      if (root.val === target) {
        return true;
      }
      return dfs(root.left, target) || dfs(root.right, target);
    };
    return dfs(this.root, target);
  }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
