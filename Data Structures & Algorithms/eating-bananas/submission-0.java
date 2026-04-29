class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int i = 1;
        int j = 0;

        for (int p : piles) {
            j = Math.max(j, p);
        }

        while (i <= j) {
            int mid = i + (j - i) / 2;
            int time = 0;

            for (int x = 0; x < piles.length; x++) {
                time += (piles[x] + mid - 1) / mid;
            }

            if (time > h) {
                i = mid + 1;
            } else {
                j = mid - 1;
            }
        }

        return i;
    }
}