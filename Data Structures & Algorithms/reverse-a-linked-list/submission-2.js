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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;

        while (head !== null) {
            let next_node = head.next; 
            head.next = prev;          
            prev = head;              
            head = next_node;      
        } 

        return prev;
    }
}