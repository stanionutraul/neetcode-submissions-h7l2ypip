class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length;

        // array pentru frecvența literelor A-Z
        const charCounts = new Array(26).fill(0);

        let windowStart = 0; // începutul ferestrei
        let maxLength = 0;   // rezultatul final
        let maxCount = 0;    // cea mai mare frecvență din fereastră

        // extindem fereastra spre dreapta
        for (let windowEnd = 0; windowEnd < n; windowEnd++) {
            const index = s.charCodeAt(windowEnd) - 'A'.charCodeAt(0);
            charCounts[index]++;
            maxCount = Math.max(maxCount, charCounts[index]);
            while ((windowEnd - windowStart + 1) - maxCount > k) {
                const leftIndex = s.charCodeAt(windowStart) - 'A'.charCodeAt(0);
                charCounts[leftIndex]--;             
                windowStart++;
            }

           
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
        }

        return maxLength;
    }
}