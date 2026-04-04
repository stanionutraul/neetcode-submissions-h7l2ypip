class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        
        HashMap<Integer, Integer> elems = new HashMap<>();

        for(int num : nums){
            elems.put(num, elems.getOrDefault(num, 0) + 1);
        }

        List<Integer> keys = new ArrayList<>(elems.keySet());

        keys.sort((a,b) -> elems.get(b) - elems.get(a));

        int[] result = new int[k];

        for(int i = 0; i < k; i++){
            result[i] = keys.get(i);
        }

        return result;
    }
}
