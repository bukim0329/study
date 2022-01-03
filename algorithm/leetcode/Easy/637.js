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
 var averageOfLevels = function(root) {
    const ans = Array();
    const num = Array();
    const queue = [[root, 0]];
    let level = 0;
    while (queue.length) {
        const [tmp, level] = queue.shift();
        if (tmp === null)
            continue;
        queue.push([tmp.left, level + 1]);
        queue.push([tmp.right, level + 1]);
        ans[level] = ans[level] ? ans[level] + tmp.val : tmp.val;
        num[level] = num[level] ? num[level] + 1 : 1;
    }
    return ans.map((val, ind)=>val / num[ind]);
};