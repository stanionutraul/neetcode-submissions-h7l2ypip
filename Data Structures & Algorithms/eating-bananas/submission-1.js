class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let i = 1;
        let j = 0;

        // limita superioară = max din piles
        for (let p of piles) {
            j = Math.max(j, p);
        }

        while (i <= j) {
            let mid = Math.floor(i + (j - i) / 2);
            let time = 0;

            // calculăm orele necesare pentru viteza mid
            for (let x = 0; x < piles.length; x++) {
                time += Math.floor((piles[x] + mid - 1) / mid);
            }

            if (time > h) {
                i = mid + 1; // prea lent → creștem viteza
            } else {
                j = mid - 1; // merge → încercăm mai mic
            }
        }

        return i;
    }
}