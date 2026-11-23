/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        //Split into 2 Halves, The 2nd Half is Reversed and Merge them both.

        let slow = head;
        let fast = head.next;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next
        let prev = null
        slow.next = null
        while(second != null){
            let tmp = second.next
            second.next = prev
            prev = second
            second = tmp
        }

        let first = head
        second = prev
        while(second != null){
            let tmp1 = first.next
            let tmp2 = second.next
            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2
        }
    }
}
