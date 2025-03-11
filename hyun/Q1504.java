import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q1504 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int e = Integer.parseInt(st.nextToken());

        List<List<Node>> graph = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<>());
        }

        for (int i = 0; i < e; i++) {
            st = new StringTokenizer(br.readLine());
            int v1 = Integer.parseInt(st.nextToken());
            int v2 = Integer.parseInt(st.nextToken());
            int w = Integer.parseInt(st.nextToken());

            graph.get(v1).add(new Node(v2, w));
            graph.get(v2).add(new Node(v1, w));
        }

        st = new StringTokenizer(br.readLine());
        int mid1 = Integer.parseInt(st.nextToken());
        int mid2 = Integer.parseInt(st.nextToken());

        int[] distFromStart = bfs(1, graph);
        int[] distFromMid1 = bfs(mid1, graph);
        int[] distFromMid2 = bfs(mid2, graph);

        int candidate1 = distFromStart[mid1] + distFromMid1[mid2] + distFromMid2[n];
        boolean possible1 = true;
        if (distFromStart[mid1] == -1 || distFromMid1[mid2] == -1 || distFromMid2[n] == -1) {
            possible1 = false;
        }

        int candidate2 = distFromStart[mid2] + distFromMid2[mid1] + distFromMid1[n];
        boolean possible2 = true;
        if (distFromStart[mid2] == -1 || distFromMid2[mid1] == -1 || distFromMid1[n] == -1) {
            possible2 = false;
        }

        if (!possible1 && possible2) {
            System.out.println(candidate2);
        } else if (possible1 && !possible2) {
            System.out.println(candidate1);
        } else if (!possible1 && !possible2) {
            System.out.println(-1);
        } else {
            System.out.println(Math.min(candidate1, candidate2));
        }
    }

    private static int[] bfs(int startNode, List<List<Node>> graph) {
        int[] dist = new int[graph.size()];
        Arrays.fill(dist, -1);
        PriorityQueue<List<Integer>> queue = new PriorityQueue<>(Comparator.comparingInt(a -> a.get(0)));
        queue.add(List.of(0, startNode));

        while (!queue.isEmpty()) {
            List<Integer> pop = queue.remove();
            int current = pop.get(1);
            int cost = pop.get(0);

            if (dist[current] != -1) {
                continue;
            }
            dist[current] = cost;

            for (Node nextNode : graph.get(current)) {
                int next = nextNode.getNumber();
                int nextCost = nextNode.getWeight();
                queue.add(List.of(nextCost + cost, next));
            }
        }

        return dist;
    }

    static class Node {
        int number;
        int weight;

        public Node(int number, int weight) {
            this.number = number;
            this.weight = weight;
        }

        public int getNumber() {
            return number;
        }

        public int getWeight() {
            return weight;
        }
    }
}
