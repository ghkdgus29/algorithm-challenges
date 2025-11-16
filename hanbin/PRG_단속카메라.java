import java.util.*;

class Solution {
    public int solution(int[][] routes) {
        int answer = 0;
        
        // 1. 끝 시간 오름차순 sort
        Arrays.sort(routes, (a,b) -> a[1] - b[1]);
        
        // 2. 카메라 정보
        int camPosition = -30001;
        
        for (int[] route : routes){
            int start = route[0];
            int end = route[1];
            
            // 3. 카메라 설치
            if (camPosition < start){
                camPosition = end;
                ++answer;
            }
        }
        
        return answer;
    }
}
