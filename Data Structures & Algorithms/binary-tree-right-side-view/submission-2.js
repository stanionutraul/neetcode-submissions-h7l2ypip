/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {

        const result = [];
        const queue = [];

        if (root === null) return result;

        queue.push(root);

        while (queue.length > 0) {

            const size = queue.length;

            for (let i = 0; i < size; i++) {

                const current_node = queue.shift();

                if (i === 0) {
                    result.push(current_node.val);
                }

                if (current_node.right !== null) {
                    queue.push(current_node.right);
                }

                if (current_node.left !== null) {
                    queue.push(current_node.left);
                }
            }
        }

        return result;
    }
}