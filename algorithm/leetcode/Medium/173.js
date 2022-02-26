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
class BSTIterator {
  constructor(root) {
    this.ind = 0;
    this.trav = [];
    const inOrder = root => {
      if (!root) {
        return;
      }
      inOrder(root.left);
      this.trav.push(root.val);
      inOrder(root.right);
    };
    inOrder(root);
  }

  /**
   * @return {number}
   */
  next() {
    return this.trav[this.ind++];
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.ind < this.trav.length;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
