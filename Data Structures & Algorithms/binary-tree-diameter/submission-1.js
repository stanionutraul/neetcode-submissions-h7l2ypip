class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;

        const dfs = (node) => {
            if (node === null) return 0;

            const left = dfs(node.left);
            const right = dfs(node.right);

            diameter = Math.max(diameter, left + right);
          
            return  Math.max(left, right) + 1;
        };

        dfs(root);
        return diameter;
    }
}