import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q21736 {
    public static void main(String[] args) throws IOException {
        int[] dx = {0, 1, 0, -1};
        int[] dy = {1, 0, -1, 0};
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int h = Integer.parseInt(st.nextToken());
        int w = Integer.parseInt(st.nextToken());
        char[][] a = new char[h][w];

        List<Integer> start = new ArrayList<>();
        for (int y = 0; y < h; y++) {
            String s = br.readLine();
            for (int x = 0; x < w; x++) {
                a[y][x] = s.charAt(x);
                if (a[y][x] == 'I') {
                    start.add(x);
                    start.add(y);
                }
            }
        }

        Queue<List<Integer>> queue = new ArrayDeque<>();
        boolean[][] visit = new boolean[h][w];
        int count = 0;
        queue.add(start);
        while (!queue.isEmpty()) {
            List<Integer> pos = queue.remove();
            int x = pos.get(0);
            int y = pos.get(1);

            for (int i = 0; i < 4; i++) {
                int nx = dx[i] + x;
                int ny = dy[i] + y;
                if (0 <= nx && nx < w && 0 <= ny && ny < h) {
                    if (!visit[ny][nx] && a[ny][nx] != 'X') {
                        queue.add(List.of(nx, ny));
                        if (a[ny][nx] == 'P') {
                            count++;
                        }
                        visit[ny][nx] = true;
                    }
                }
            }
        }
        System.out.println(count == 0 ? "TT" : count);
    }
}

// 제한시간 2초
// 600 * 600 = 360000 < 1초
// BFS