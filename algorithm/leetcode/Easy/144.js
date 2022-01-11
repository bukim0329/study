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
 var preorderTraversal = function(root) {
    const ans = Array();
    function preorder(root) {
        if (!root)
            return;
        ans.push(root.val);
        if (root.left)
            preorder(root.left);
        if (root.right)
            preorder(root.right);
    }
    preorder(root);
    return ans;
};