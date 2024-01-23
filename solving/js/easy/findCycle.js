/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head ? (head.next ? head.next.next : head.next) : head;
    while (fast) {
        slow = slow.next;
        fast = fast ? (fast.next ? fast.next.next : fast.next) : fast;
        if (fast == slow) {
            return true;
        }
    }
    return false;
};
