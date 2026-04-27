class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x < 2) return x;

        let left = 1;
        let right = Math.floor(x / 2);
        let result = 0;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (mid <= Math.floor(x / mid)) {
                result = mid;      // candidat valid
                left = mid + 1;   // cautăm mai mare
            } else {
                right = mid - 1;  // prea mare, mergem stânga
            }
        }

        return result;
    }
}