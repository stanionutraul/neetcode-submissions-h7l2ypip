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
     * @return {number[][]}
     */
    levelOrder(root) {

        const output = [];

        if (root === null) return output;

        const queue = [];
        queue.push(root);

        while (queue.length > 0) {

            const len = queue.length;
            const level_list = [];

            for (let i = 0; i < len; i++) {

                const node = queue.shift();

                level_list.push(node.val);

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }

            output.push(level_list);
        }

        return output;
    }
}