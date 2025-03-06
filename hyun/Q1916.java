import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q1916 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        int e = Integer.parseInt(br.readLine());
        PriorityQueue<List<Integer>> queue = new PriorityQueue<>(Comparator.comparingInt(a -> a.get(0)));
        List<List<List<Integer>>> graph = new ArrayList<>();

        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<>());
        }
        for (int i = 0; i < e; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int v1 = Integer.parseInt(st.nextToken());
            int v2 = Integer.parseInt(st.nextToken());
            int cost = Integer.parseInt(st.nextToken());
            graph.get(v1).add(List.of(v2, cost));
        }

        StringTokenizer st = new StringTokenizer(br.readLine());
        int start = Integer.parseInt(st.nextToken());
        int end = Integer.parseInt(st.nextToken());
        int[] dist = new int[n + 1];
        boolean[] visit = new boolean[n + 1];
        queue.add(List.of(0, start));
        while (!queue.isEmpty()) {
            List<Integer> pop = queue.remove();
            int cost = pop.get(0);
            int current = pop.get(1);

            if (visit[current]) {
                continue;
            }
            dist[current] = cost;
            visit[current] = true;
            for (List<Integer> next : graph.get(current)) {
                int nextNode = next.get(0);
                int nextCost = next.get(1);
                queue.add(List.of(cost + nextCost, nextNode));
            }
        }

        System.out.println(dist[end]);
    }
}

// 제한시간 0.5초
// BFS
// 100000 * log2(100000) < 0.5초
