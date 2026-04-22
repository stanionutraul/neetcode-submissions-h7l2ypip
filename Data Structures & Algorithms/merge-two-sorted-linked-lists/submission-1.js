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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let temp_node = new ListNode(0);
        let current_node = temp_node;

        while (list1 !== null && list2 !== null) {
            if (list1.val < list2.val) {
                current_node.next = list1;
                list1 = list1.next;
            } else {
                current_node.next = list2;
                list2 = list2.next;
            }

            current_node = current_node.next;
        }

        if (list1 !== null) {
            current_node.next = list1;
        }

        if (list2 !== null) {
            current_node.next = list2;
        }

        return temp_node.next;
    }
}