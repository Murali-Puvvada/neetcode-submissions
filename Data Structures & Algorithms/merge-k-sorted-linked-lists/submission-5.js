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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeList(list1, list2) {
        let dummy = new ListNode();
        let cur = dummy;

        while (list1 && list2) {
            if (list1.val < list2.val) {
                cur.next = list1;
                list1 = list1.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
            }
            cur = cur.next;
        }
        if (list1) {
            cur.next = list1;
        }else{
            cur.next = list2;
        }

        return dummy.next;
    }
    mergeKLists(lists) {
        if(lists.length === 0) return null
        //Merge 2 Lists and Run a Loop
        //Heap then return a Linked List
        const minHeap = new MinPriorityQueue((x) => x.val);
        for (let list of lists) {
            if (list != null) minHeap.enqueue(list);
        }

        let res = new ListNode(0);
        let cur = res;
        while (minHeap.size() > 0) {
            let node = minHeap.dequeue();
            cur.next = node;
            cur = cur.next;

            node = node.next;
            if (node != null) {
                minHeap.enqueue(node);
            }
        }
        return res.next;
    }
}
