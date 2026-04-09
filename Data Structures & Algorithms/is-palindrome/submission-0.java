class Solution {
    public boolean isPalindrome(String s) {
         char[] word = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase().toCharArray();
        int left = 0;
        int right = word.length -1;
        
        while(left < right){
            if(word[left] != word[right]){
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
