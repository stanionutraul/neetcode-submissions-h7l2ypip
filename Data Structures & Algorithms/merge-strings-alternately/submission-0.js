class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let leftFirst = 0;
        let leftSecond = 0;
        let result = [];

        while (leftFirst < word1.length || leftSecond < word2.length) {

            if (leftFirst < word1.length) {
                result.push(word1[leftFirst]);
                leftFirst++;
            }

            if (leftSecond < word2.length) {
                result.push(word2[leftSecond]);
                leftSecond++;
            }
        }

        return result.join("");
    }
}