/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    const ans = [];
    const rec = function(root) {
        if (root) {
            for (let ch of root.children)
                rec(ch);
            ans.push(root.val);
        }
    }
    rec(root);
    return ans;
};