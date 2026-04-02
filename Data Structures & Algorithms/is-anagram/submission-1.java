class Solution {
    public boolean isAnagram(String s, String t) {
        char[] firstS = s.toCharArray();
        char[] secondT = t.toCharArray();

        Arrays.sort(firstS);
        Arrays.sort(secondT);

        if(Arrays.equals(firstS, secondT)) return true;
        else return false;
    }
}
