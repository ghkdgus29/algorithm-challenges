import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
        StringTokenizer st = new StringTokenizer((br.readLine()));

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        int[] inDegree = new int[N+1];
        List<Integer>[] nodes = new ArrayList[N+1];
        for (int i = 0; i < N; i++){
            nodes[i+1] = new ArrayList<>();
        }

        for (int i = 0; i < M; i++){
            st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());

            ++inDegree[e];

            nodes[s].add(e);
        }

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int i = 1; i <= N; i++){
            if (inDegree[i] == 0){
                pq.add(i);
            }
        }

        StringBuilder answer = new StringBuilder();
        while(!pq.isEmpty()){
            int current = pq.poll();
            answer.append(current).append(" ");

            List<Integer> next = nodes[current];
            for (int i : next){
                --inDegree[i];

                if (inDegree[i] == 0){
                    pq.add(i);
                }
            }
        }

        System.out.print(answer.toString());
    }
}

