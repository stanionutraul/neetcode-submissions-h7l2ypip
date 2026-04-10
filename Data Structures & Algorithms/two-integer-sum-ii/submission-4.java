class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int index1 = 0;
        int index2 = numbers.length -1;

        System.out.println(numbers[index1] < numbers[index2]);

        while(index1 < index2){
            int sum = numbers[index1] + numbers[index2];
            if( sum == target && numbers[index1] < numbers[index2]){
                return new int[]{index1+1, index2+1};
            }
            else if (sum < target){
                index1++;
            }
            else {
                index2--;
            }
        }
         return new int[]{-1, -1};
    }
}
