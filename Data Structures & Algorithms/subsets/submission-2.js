class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        const res = [];
        const subset = [];

        const dfs = (i) => {

            if (i >= nums.length) {
                res.push([...subset]);
                return;
            }

            // luam elementul
            subset.push(nums[i]);
            dfs(i + 1);

            // backtrack
            subset.pop();

            // nu luam elementul
            dfs(i + 1);
        };

        dfs(0);

        return res;
    }
}