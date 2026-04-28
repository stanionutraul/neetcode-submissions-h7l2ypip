class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (matrix.length === 0) return false;

        const rows = matrix.length;
        const columns = matrix[0].length;

        let left = 0;
        let right = rows * columns - 1;

        while (left <= right) {
            const midpoint = Math.floor(left + (right - left) / 2);

            const value = matrix[Math.floor(midpoint / columns)][midpoint % columns];

            if (value === target) {
                return true;
            } else if (value < target) {
                left = midpoint + 1;
            } else {
                right = midpoint - 1;
            }
        }

        return false;
    }
}