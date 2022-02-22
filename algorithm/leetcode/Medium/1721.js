/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
  const num = [];
  let ptr = head;
  while (ptr) {
    num.push(ptr.val);
    ptr = ptr.next;
  }
  [num[k - 1], num[num.length - k]] = [num[num.length - k], num[k - 1]];
  let ans = new ListNode(num[num.length - 1], null);
  for (let i = num.length - 2; i >= 0; i -= 1) {
    const tmp = new ListNode(num[i], ans);
    ans = tmp;
  }

  return ans;
};
