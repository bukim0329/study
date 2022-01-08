/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    const ans = Array();
    const rec = function(root) {
        if (root) {
            ans[ans.length] = root.val;
            for (let ch of root.children)
                rec(ch);
        }
    }
    rec(root);
    return ans;
};