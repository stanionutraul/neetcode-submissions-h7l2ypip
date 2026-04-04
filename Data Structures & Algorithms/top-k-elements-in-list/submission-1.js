class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for(let num of nums){
            map.set(num, (map.get(num) || 0) + 1);
        }

        let keys = Array.from(map.keys());

        keys.sort((a,b) => map.get(b)- map.get(a));

        return keys.slice(0,k);
    }
}
