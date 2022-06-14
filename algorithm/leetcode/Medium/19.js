/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  const nullHead = new ListNode(null);
  nullHead.next = head;
  let p1 = nullHead;
  let p2 = nullHead;

  for (let i = 0; i < n + 1; i++) p1 = p1.next;
  while (p1 !== null) {
    p2 = p2.next;
    p1 = p1.next;
  }
  p2.next = p2.next.next;
  return nullHead.next;
};
