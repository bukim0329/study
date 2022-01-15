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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    const ans = Array();
    const path = Array();
    function dfs(root) {
        path.push(root.val);
        if (!root.left && !root.right) {
            ans.push(path.join('->'));
            path.pop();
            return;
        }
        if (root.left)
            dfs(root.left);
        if (root.right)
            dfs(root.right);
        path.pop();
    }
    dfs(root);
    return ans;
};