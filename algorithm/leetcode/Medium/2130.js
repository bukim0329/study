/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const pairSum = function (head) {
  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  let max = 0;
  for (let i = 0; i < arr.length / 2; i += 1) {
    max = Math.max(arr[i] + arr[arr.length - 1 - i], max);
  }

  return max;
};
