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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    if (!root)
        return 0;
    const cur = root.val;
    let ans = 0;
    if (cur <= high && cur >= low)
        ans += cur;
    ans += rangeSumBST(root.left, low, high);
    ans += rangeSumBST(root.right, low, high);
    return ans;
};