import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
        StringTokenizer st = new StringTokenizer((br.readLine()));

        int V = Integer.parseInt(st.nextToken());
        int E = Integer.parseInt(st.nextToken());

        int start = Integer.parseInt(br.readLine());

        List<int[]>[] nodes = new ArrayList[V+1];
        for (int i = 1; i <= V; i++){
            nodes[i] = new ArrayList<>();
        }

        for (int i = 0; i < E; i++){
            st = new StringTokenizer(br.readLine());

            int u = Integer.parseInt(st.nextToken());
            int v = Integer.parseInt(st.nextToken());
            int w = Integer.parseInt(st.nextToken());

            nodes[u].add(new int[]{v,w});
        }

        int[] dist = new int[V+1];
        Arrays.fill(dist, 300001);

        dist[start] = 0;

        PriorityQueue<int[]> pq = new PriorityQueue<>((a,b) -> a[1] - b[1]);
        pq.add(new int[]{start, 0});

        while(!pq.isEmpty()){
            int[] current = pq.poll();

            List<int[]> node = nodes[current[0]];
            for (int[] next : node){
                if (current[1] + next[1] < dist[next[0]]){
                    dist[next[0]] = current[1] + next[1];
                    pq.add(new int[]{next[0], dist[next[0]]});
                }
            }
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 1; i <= V; i++){
            if (dist[i] == 300001){
                sb.append("INF");
            } else {
                sb.append(dist[i]);
            }
            sb.append("\n");
        }
        System.out.println(sb);
    }
}

