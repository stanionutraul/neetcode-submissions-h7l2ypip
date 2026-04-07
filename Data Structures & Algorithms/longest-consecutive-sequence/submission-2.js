class Solution {
    longestConsecutive(nums) {

        let set = new Set(nums);
        let max = 0;

        for (let num of set) {

            if (!set.has(num - 1)) {

                let current = num;
                let count = 1;

                while (set.has(current + 1)) {
                    current++;
                    count++;
                }

                max = Math.max(max, count);
            }
        }

        return max;
    }
}