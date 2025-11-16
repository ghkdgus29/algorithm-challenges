import java.util.*;

class Solution {
    public int[] solution(int n, int s) {
        if (n > s) return new int[]{-1};
        
        int mid = s / n;
        int rest = s % n;
        
        int[] answer = new int[n];
        Arrays.fill(answer, mid);
        
        for (int i = 0; i < rest; ++i){
            answer[n - 1 - i]++;
        }
        
        return answer;
    }
}
