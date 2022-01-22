/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  let ptrA = headA;
  let ptrB = headB;
  while (ptrA !== ptrB) {
    ptrA = ptrA == null ? headA : ptrA.next;
    ptrB = ptrB == null ? headB : ptrB.next;
  }

  return ptrA;
};
