class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       if (nums.length === 0) return 0;

        let numsFinal = Array.from(new Set(nums.sort((a, b) => a - b)));

        let maxCount = 1;
        let count = 1;

        for (let i = 1; i < numsFinal.length; i++) {

            if (numsFinal[i] === numsFinal[i - 1] + 1) {
                count++;
            } else {
                count = 1;
            }

            maxCount = Math.max(maxCount, count);
        }

        return maxCount;
    }
}
