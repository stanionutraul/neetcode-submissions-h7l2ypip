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
        if (head === null || head.next === null) return;

        // 1. Split list
        let slow = head;
        let fast = head;
        let prev = null;

        while (fast !== null && fast.next !== null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        // tăiem lista în două
        prev.next = null;

        let l1 = head;
        let l2 = this.reverse(slow);

        // 3. merge
        this.merge(l1, l2);
    }

    reverse(head) {
        let prev = null;
        let current = head;

        while (current !== null) {
            let next_node = current.next;
            current.next = prev;
            prev = current;
            current = next_node;
        }

        return prev;
    }

    merge(l1, l2) {
        while (l1 !== null) {
            let l1_next = l1.next;
            let l2_next = l2.next;

            l1.next = l2;

            if (l1_next === null) break;

            l2.next = l1_next;

            l1 = l1_next;
            l2 = l2_next;
        }
    }
}