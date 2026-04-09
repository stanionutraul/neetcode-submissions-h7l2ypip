class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const word = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("");
        let left = 0;
        let right = word.length - 1;

        while (left < right) {
            if (word[left] !== word[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}