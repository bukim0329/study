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
 var deleteDuplicates = function(head) {
    let prev = head;
    let curr = prev ? prev.next : null;
    while (curr) {
        prev.val === curr.val ? prev.next = curr.next : prev = curr;
        curr = prev.next;
    }
    return head;
};