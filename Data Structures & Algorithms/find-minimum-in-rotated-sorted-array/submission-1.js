class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length === 0) return -1;
        if (nums.length === 1) return nums[0];

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let midpoint = Math.floor(left + (right - left) / 2);

            // found rotation point (minimum element)
            if (midpoint > 0 && nums[midpoint] < nums[midpoint - 1]) {
                return nums[midpoint];
            }

            // left side is sorted, minimum must be on right side
            if (nums[left] <= nums[midpoint] && nums[midpoint] > nums[right]) {
                left = midpoint + 1;
            } 
            // otherwise search left side
            else {
                right = midpoint - 1;
            }
        }

        return nums[left];
    }
}