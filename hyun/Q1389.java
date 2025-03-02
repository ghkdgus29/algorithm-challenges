import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q1389 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int edgeCount = Integer.parseInt(st.nextToken());

        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int i = 0; i < edgeCount; i++) {
            st = new StringTokenizer(br.readLine());
            int v1 = Integer.parseInt(st.nextToken());
            int v2 = Integer.parseInt(st.nextToken());
            graph.get(v1).add(v2);
            graph.get(v2).add(v1);
        }

        int ans = -1;
        int ansCount = Integer.MAX_VALUE;

        for (int i = 1; i <= n; i++) {
            int count = 0;
            int[] dist = new int[n + 1];
            Arrays.fill(dist, -1);

            Queue<Integer> queue = new ArrayDeque<>();
            queue.add(i);
            dist[i] = 0;
            while (!queue.isEmpty()) {
                int cur = queue.remove();
                for (int next : graph.get(cur)) {
                    if (dist[next] == -1) {
                        queue.add(next);
                        dist[next] = dist[cur] + 1;
                        count += dist[next];
                    }
                }
            }

            if (count < ansCount) {
                ans = i;
                ansCount = count;
            }
        }

        System.out.println(ans);
    }
}

// 2초
// 5000 * 5000 = 2500 0000 < 1초
// BFS
