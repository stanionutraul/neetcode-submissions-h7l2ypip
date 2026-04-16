class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let n = position.length;

        let cars = [];
        for (let i = 0; i < n; i++) {
            cars.push([position[i], speed[i]]);
        }


        cars.sort((a, b) => b[0] - a[0]);

        let fleets = 0;
        let slowestTime = 0;

        for (let i = 0; i < n; i++) {
            let pos = cars[i][0];
            let spd = cars[i][1];

            let eta = (target - pos) / spd;

            if (eta > slowestTime) {
                fleets++;
                slowestTime = eta;
            }
        }

        return fleets;
    }
}