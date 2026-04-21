class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let a = 0;
        let b = 0;
        let max = 0;

        const set = new Set();

        while(b < s.length){
            if(!set.has(s[b])){
                set.add(s[b]);
                max = Math.max(max, set.size);
                b++;
            }
            else{
                set.delete(s[a]);
                a++;
            }

        }
        return max;

    }
}
