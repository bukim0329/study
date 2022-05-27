/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = head => {
  if (!head) {
    return null;
  }
  const clones = new Map();
  let ptr = head;
  while (ptr) {
    clones.set(ptr, new Node(ptr.val));
    ptr = ptr.next;
  }
  ptr = head;
  while (ptr) {
    clones.get(ptr).next = clones.get(ptr.next) || null;
    clones.get(ptr).random = clones.get(ptr.random) || null;
    ptr = ptr.next;
  }
  return clones.get(head);
};
