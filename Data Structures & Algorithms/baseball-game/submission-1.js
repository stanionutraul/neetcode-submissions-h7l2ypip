class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (let op of operations) {
            if (op === "C") {
                stack.pop();
            } 
            else if (op === "D") {
                stack.push(2 * stack[stack.length - 1]);
            } 
            else if (op === "+") {
                let n = stack.length;
                stack.push(stack[n - 1] + stack[n - 2]);
            } 
            else {
                stack.push(Number(op));
            }
        }

        let sum = 0;
        for (let num of stack) {
            sum += num;
        }

        return sum;
    }
}