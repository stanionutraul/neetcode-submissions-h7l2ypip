class Solution {
    public int majorityElement(int[] nums) {
        int dimension = nums.length / 2;
        int count = 0;
        
        HashMap<Integer, Integer> ht = new HashMap<>();

        for (int num : nums){
            ht.put(num, ht.getOrDefault(num, 0)+1);

            if(ht.get(num) > dimension){
                return num;
            }
        }

        return -1;
    }
}