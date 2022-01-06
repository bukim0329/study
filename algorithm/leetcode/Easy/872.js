/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    function findLeaf(root) {
        const ret = Array();
        if (!root.left && !root.right)
            return [root.val];
        if (root.left)
            ret.push(...findLeaf(root.left));
        if (root.right)
            ret.push(...findLeaf(root.right));
        return ret;
    }
    return JSON.stringify(findLeaf(root1)) === JSON.stringify(findLeaf(root2));
};