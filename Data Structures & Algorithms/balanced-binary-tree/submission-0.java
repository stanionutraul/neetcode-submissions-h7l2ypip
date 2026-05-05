/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    public boolean isBalanced(TreeNode root) {
         if (root == null) return true;
        else {
            int left = getMaxSubTree(root.left);
            int right = getMaxSubTree(root.right);

            return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
        }
    }
    private int getMaxSubTree(TreeNode node){
        if(node == null) return 0;
        else{
            return 1 + Math.max(getMaxSubTree(node.left), getMaxSubTree(node.right));
    }
    }
}
