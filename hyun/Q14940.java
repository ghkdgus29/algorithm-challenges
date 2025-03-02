import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q14940 {
    public static void main(String[] args) throws IOException {
        int[] dx = {0, 1, 0, -1};
        int[] dy = {1, 0, -1, 0};

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int h = Integer.parseInt(st.nextToken());
        int w = Integer.parseInt(st.nextToken());
        int sx = 0;
        int sy = 0;

        int[][] a = new int[h][w];
        for (int y = 0; y < h; y++) {
            st = new StringTokenizer(br.readLine());
            for (int x = 0; x < w; x++) {
                a[y][x] = Integer.parseInt(st.nextToken());
                if (a[y][x] == 2) {
                    sx = x;
                    sy = y;
                }
            }
        }

        int[][] dist = new int[h][w];
        for (int i = 0; i < h; i++) {
            Arrays.fill(dist[i], -1);
        }
        Queue<List<Integer>> queue = new ArrayDeque<>();
        dist[sy][sx] = 0;
        queue.add(List.of(sx, sy));
        while (!queue.isEmpty()) {
            List<Integer> current = queue.remove();
            int x = current.get(0);
            int y = current.get(1);
            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];
                if (0 <= nx && nx < w && 0 <= ny && ny < h) {
                    if (dist[ny][nx] == -1 && a[ny][nx] == 1) {
                        dist[ny][nx] = dist[y][x] + 1;
                        queue.add(List.of(nx, ny));
                    }
                }
            }
        }
        StringBuilder sb = new StringBuilder();

        for (int y = 0; y < h; y++) {
            for (int x = 0; x < w; x++) {
                if (a[y][x] == 0) {
                    sb.append("0 ");
                } else {
                    sb.append(dist[y][x] + " ");
                }
            }
            sb.append("\n");
        }
        System.out.println(sb);
    }
}

// 1초
// 1000 * 1000 = 100 0000 < 1초
// BFS