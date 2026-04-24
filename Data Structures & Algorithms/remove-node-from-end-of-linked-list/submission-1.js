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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy_head = new ListNode(0,head);

        let slow = dummy_head;
        let fast = dummy_head;

        for(let i = 1; i <= n+1; i++){
            fast = fast.next;

        }
            while(fast !== null){
                slow = slow.next;
                fast = fast.next;
            }

            slow.next = slow.next.next;
        
        return dummy_head.next;
    }
}
