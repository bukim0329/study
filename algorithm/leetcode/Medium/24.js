/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = head => {
  if (!head || !head.next) {
    return head;
  }
  const rest = swapPairs(head.next.next);
  head.next.next = head;
  head = head.next;
  head.next.next = rest;

  return head;
};
