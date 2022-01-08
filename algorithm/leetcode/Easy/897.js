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
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
    let ret = new TreeNode(); 
    let node = ret;
	
    const traverse = function(root) {
        if(!root) return; 
        traverse(root.left); 
        node.right = root; 
        node = node.right; 
        node.left = null;
        traverse(root.right);    
    }; 
	
    traverse(root);
    return ret.right;
};