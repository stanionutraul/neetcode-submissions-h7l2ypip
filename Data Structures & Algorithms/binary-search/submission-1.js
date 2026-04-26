class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while ( left <= right){
            let midpoint = left + Math.floor((right-left)/2);
            if(nums[midpoint] === target){
                return midpoint;
            } else if (nums[midpoint] < target){
                left = midpoint +1;
            } else {
                right = midpoint -1;
            }

        }
        
        return -1;
    }
}
