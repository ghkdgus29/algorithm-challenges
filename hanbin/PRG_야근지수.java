import java.util.*;

class Solution {
    public long solution(int n, int[] works) {
        long answer = 0;
        
        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b - a);
        for (int i : works){
            pq.offer(i);
        }
        
        for (int count = 0; count < n; ++count){
            int cur = pq.poll();
            
            pq.offer(Math.max(cur - 1, 0));
        }
        
        while(!pq.isEmpty()){
            int cur = pq.poll();
            answer += cur * cur;
        }
        
        return answer;
    }
}
