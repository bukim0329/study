/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const ans = [];
  const trav = par => {
    if (par.length > 0 && par[0]) {
      let tmp = [];
      ans.push(par.map(root => root.val));
      par.forEach(root => {
        tmp = [...tmp, ...root.children];
      });
      trav(tmp);
    }
  };
  trav([root]);
  return ans;
};
