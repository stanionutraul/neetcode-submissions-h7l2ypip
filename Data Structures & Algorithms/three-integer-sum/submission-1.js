class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums){
        nums.sort((a,b) => a-b);
        const result = [];

        for(let i = 0 ; i < nums.length -2 ; i++){
            if(i === 0 || (nums[i] !== nums[i-1])){
                let low = i+1;
                let high = nums.length -1;
                let target = -nums[i];

                while(low < high){
                    let sum = nums[low] + nums[high];

                    if(sum === target){
                        result.push([nums[i], nums[low], nums[high]]);

                    while(low < high && (nums[low] === nums[low+1])) low++;
                    while(low < high && (nums[high] === nums[high-1])) high--;

                    low++;
                    high--;

                    }
                    else if(sum > target){
                        high--
                    }
                    else low++;
                }

            }

        }

        return result;
    }
}
