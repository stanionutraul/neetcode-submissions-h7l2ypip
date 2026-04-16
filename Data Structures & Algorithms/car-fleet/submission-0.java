class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        int n = position.length;
        
        double[][] cars = new double[n][2];
        
        for (int i = 0; i < n; i++) {
            cars[i][0] = position[i];
            cars[i][1] = speed[i];
        }
        Arrays.sort(cars, (a, b) -> Double.compare(b[0], a[0]));
        
        int fleets = 0;
        double slowestTime = 0;
        
        for (int i = 0; i < n; i++) {
            double pos = cars[i][0];
            double spd = cars[i][1];
            
            double eta = (target - pos) / spd;
            
            if (eta > slowestTime) {
                fleets++;
                slowestTime = eta;
            }
        }
        
        return fleets;
    }
}