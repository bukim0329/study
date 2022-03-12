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
 */
class CBTInserter {
  constructor(root) {
    this.tree = root;
  }

  /**
   * @param {number} val
   * @return {number}
   */
  insert(val) {
    const stack = [this.tree];
    let firstNodeInLastRow = null;

    while (stack.length > 0) {
      firstNodeInLastRow = stack[0];
      for (let i = stack.length - 1; i >= 0; i--) {
        const node = stack.shift();

        if (node.left) stack.push(node.left);
        else {
          node.left = new TreeNode(val, null, null);
          return node.val;
        }

        if (node.right) stack.push(node.right);
        else {
          node.right = new TreeNode(val, null, null);
          return node.val;
        }
      }
    }

    firstNodeInLastRow.left = new TreeNode(val, null, null);
    return firstNodeInLastRow.val;
  }

  /**
   * @return {TreeNode}
   */
  get_root() {
    return this.tree;
  }
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
