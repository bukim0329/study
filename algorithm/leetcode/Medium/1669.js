/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = function (list1, a, b, list2) {
  let node1 = list1;
  let node2 = list1;

  for (let i = 0; i < a - 1; i += 1) {
    node1 = node1.next;
  }
  for (let i = 0; i < b + 1; i += 1) {
    node2 = node2.next;
  }
  node1.next = list2;
  while (node1.next) {
    node1 = node1.next;
  }
  node1.next = node2;

  return list1;
};
