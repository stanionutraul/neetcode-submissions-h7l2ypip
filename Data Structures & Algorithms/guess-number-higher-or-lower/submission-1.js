/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let left = 1;
        let right = n;

        while(left <= right){
            let midpoint = left + Math.floor((right - left)/2);
            let result = guess(midpoint);

            if(result === 0){
                return midpoint;
            } else if(result === -1){
                 right = midpoint - 1;
            } else if (result === 1){
                left = midpoint + 1;
            }
        }
        return -1;
    }
}
