import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q11403 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        List<List<Integer>> g = new ArrayList<>();
        StringTokenizer st;
        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            g.add(new ArrayList<>());
            for (int j = 0; j < n; j++) {
                int num = Integer.parseInt(st.nextToken());
                if (num == 1) {
                    g.get(i).add(j);
                }
            }
        }

        boolean[][] ans = new boolean[n][n];
        for (int v = 0; v < n; v++) {
            for (int target = 0; target < n; target++) {
                 ans[v][target] = bfs(g, v, target);
            }
        }

        for (int y = 0; y < n; y++) {
            for (int x = 0; x < n; x++) {
                System.out.printf("%d ", ans[y][x] ? 1 : 0);
            }
            System.out.println();
        }
    }

    private static boolean bfs(List<List<Integer>> g, int v, int target) {
        boolean[] visit = new boolean[g.size()];
        Queue<Integer> queue = new ArrayDeque<>();
        queue.add(v);
        while (!queue.isEmpty()) {
            int curNode = queue.remove();

            for (int next : g.get(curNode)) {
                if (!visit[next]) {
                    visit[next] = true;
                    queue.add(next);
                }
            }
        }

        return visit[target];
    }
}

// 1초
// 100 * 100 * 100 = 100 0000 < 1초
// BFS
