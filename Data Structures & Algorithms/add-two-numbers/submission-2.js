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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        const dummy_head = new ListNode(0);
        let l3 = dummy_head;

        let carry = 0;

        while (l1 !== null || l2 !== null) {

            const l1_val = (l1 !== null) ? l1.val : 0;
            const l2_val = (l2 !== null) ? l2.val : 0;

            const current_sum = l1_val + l2_val + carry;

            carry = Math.floor(current_sum / 10);
            const last_digit = current_sum % 10;

            const new_node = new ListNode(last_digit);

            l3.next = new_node;

            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;

            l3 = l3.next;
        }

        if (carry > 0) {
            const new_node = new ListNode(carry);
            l3.next = new_node;
            l3 = l3.next;
        }

        return dummy_head.next;
    }
}