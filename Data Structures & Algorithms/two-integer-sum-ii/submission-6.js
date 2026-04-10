class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let index1 = 0;
        let index2 = numbers.length - 1;

        while(index1 < index2){
            let sum = numbers[index1] + numbers[index2];
            if(sum === target){
                return [index1 + 1,index2 + 1];
            }
            else if (sum < target){
                index1++
            }
            else {
                index2--;
            }
        
        }

        return [-1,-1];
    }
}
