class Solution {
    public String mergeAlternately(String word1, String word2) {
        int leftFirst = 0;
        int leftSecond = 0;
        StringBuilder result = new StringBuilder();

        while (leftFirst < word1.length() || leftSecond < word2.length()) {

            if (leftFirst < word1.length()) {
                result.append(word1.charAt(leftFirst));
                leftFirst++;
            }

            if (leftSecond < word2.length()) {
                result.append(word2.charAt(leftSecond));
                leftSecond++;
            }
        }

        return result.toString();
    }
}