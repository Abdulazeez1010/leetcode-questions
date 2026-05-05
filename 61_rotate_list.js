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
var rotateRight = function(head, k) {
    if (head === null || head.next === null || k === 0) {
        return head;
    }

    let len = 0;
    let current = head;
    let last;
    while (current) {
        len++;
        last = current;
        current = current.next;
    }

    current = head;
    k = k % len;
    if (k === 0) return head;
    let x = len - k - 1;

    let i = 0;
    while (i < x) {
        current = current.next;
        i++;
    }
    let newHead = current.next;
    let newTail = current;
    last.next = head;
    head = newHead;
    newTail.next = null;
    return head;
};