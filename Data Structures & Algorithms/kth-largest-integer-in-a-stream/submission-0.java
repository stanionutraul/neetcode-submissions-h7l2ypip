class KthLargest {
    private PriorityQueue<Integer> miniHeap;
    private int k;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.miniHeap = new PriorityQueue<>();
        for(int num : nums){
            miniHeap.offer(num);
            if(miniHeap.size() > k){
                miniHeap.poll();
            }
        }
        
    }
    
    public int add(int val) {
        miniHeap.offer(val);
        if(miniHeap.size() > k){
            miniHeap.poll();
        }        
    return miniHeap.peek();
    }
}
