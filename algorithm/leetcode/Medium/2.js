/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  const ans = new ListNode(0);
  let ptr = ans;

  while (l1 || l2 || carry > 0) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const node = new ListNode();
    if (sum > 9) {
      carry = 1;
      node.val = sum - 10;
    } else {
      carry = 0;
      node.val = sum;
    }
    ptr.next = node;
    ptr = ptr.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  return ans.next;
};
