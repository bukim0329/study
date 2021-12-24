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
 var sumRootToLeaf = function(root) {
    const arr = Array();
    const ans = Array();
    function dfs(root, arr) {
        arr.push(root.val);
        if (!root.left && !root.right)
            ans.push(arr.join(''));
        if (root.left)
            dfs(root.left, arr);
        if (root.right)
            dfs(root.right, arr);
        arr.pop();
    }
    dfs(root, arr);
    return ans.reduce((acc, cur)=>acc + parseInt(cur, 2), 0);
};