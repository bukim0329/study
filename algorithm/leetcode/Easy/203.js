/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeElements = function (head, val) {
  if (!head) {
    return head;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

const removeElements = function (head, val) {
  let curr = head;
  let prev = null;
  while (curr) {
    if (curr.val === val) {
      if (prev) {
        prev.next = curr.next;
      } else {
        head = curr.next;
      }
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};
