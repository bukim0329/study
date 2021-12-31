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
 var reverseList = function(head) {
    if (!head)
        return head;
    let ans = new ListNode(head.val);
    while (head.next) {
        const tmp = new ListNode(head.next.val, ans);
        ans = tmp;
        head = head.next;
    }
    return ans;
};