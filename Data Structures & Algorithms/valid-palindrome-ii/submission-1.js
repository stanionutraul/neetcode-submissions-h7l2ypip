class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] !== s[right]) {
                return this.helperMethod(s, left + 1, right) ||
                       this.helperMethod(s, left, right - 1);
            }

            left++;
            right--;
        }

        return true;
    }

    helperMethod(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}