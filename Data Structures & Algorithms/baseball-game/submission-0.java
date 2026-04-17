class Solution {
    public int calPoints(String[] operations) {
        Stack<Integer> stack = new Stack<>();
        int x = 0;

        for(int c = 0; c < operations.length; c++){
            String op = operations[c];
            switch(op){
                case "C":
                    stack.pop();
                    break;
                case "D":
                    stack.push(2 * stack.peek());
                    break;
               case "+":
                    int a = stack.pop();
                    int b = stack.peek(); 
                    stack.push(a);       
                    stack.push(a + b);
                     break;
                default:
                    stack.push(Integer.parseInt(op));    

            }
        }

            for (int num : stack) {
            x += num;
        
        }
        return x;
        
    }
}