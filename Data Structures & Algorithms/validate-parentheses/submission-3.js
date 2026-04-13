class Solution {
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const stack = [];

        for (let c of s) {
            if (c === '(' || c === '[' || c === '{') {
                stack.push(c);
            } 
            else if (c === ')' && stack.length && stack[stack.length - 1] === '(') {
                stack.pop();
            }
            else if (c === ']' && stack.length && stack[stack.length - 1] === '[') {
                stack.pop();
            }
            else if (c === '}' && stack.length && stack[stack.length - 1] === '{') {
                stack.pop();
            }
            else {
                return false;
            }
        }

        return stack.length === 0;
    }
}