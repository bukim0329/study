/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  const ans = new ListNode(0);
  let ptr = ans;
  while (!lists.every(val => val === null)) {
    let [min, ind] = [Infinity, -1];
    for (let i = 0; i < lists.length; i += 1) {
      if (lists[i] && min > lists[i].val) {
        min = lists[i].val;
        ind = i;
      }
    }
    ptr.next = new ListNode(lists[ind].val);
    ptr = ptr.next;
    lists[ind] = lists[ind].next;
  }
  return ans.next;
};
