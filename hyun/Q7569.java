import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q7569 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int w = Integer.parseInt(st.nextToken());
        int h = Integer.parseInt(st.nextToken());
        int box = Integer.parseInt(st.nextToken());

        int[][][] a = new int[box][h][w];
        for (int i = 0; i < box; i++) {
            for (int y = 0; y < h; y++) {
                st = new StringTokenizer(br.readLine());
                for (int x = 0; x < w; x++) {
                    a[i][y][x] = Integer.parseInt(st.nextToken());
                }
            }
        }

        int[][][] day = new int[box][h][w];
        for (int i = 0; i < box; i++) {
            for (int y = 0; y < h; y++) {
                Arrays.fill(day[i][y], -1);
            }
        }

        Queue<List<Integer>> queue = new ArrayDeque<>();
        for (int i = 0; i < box; i++) {
            for (int y = 0; y < h; y++) {
                for (int x = 0; x < w; x++) {
                    if (a[i][y][x] == 1) {
                        queue.add(List.of(x, y, i));
                        day[i][y][x] = 0;
                    }
                }
            }
        }

        int[] dx = {0, 1, 0, -1, 0, 0};
        int[] dy = {1, 0, -1, 0, 0, 0};
        int[] dz = {0, 0, 0, 0, 1, -1};
        while (!queue.isEmpty()) {
            List<Integer> remove = queue.remove();
            int x = remove.get(0);
            int y = remove.get(1);
            int z = remove.get(2);

            for (int i = 0; i < 6; i++) {
                int nx = dx[i] + x;
                int ny = dy[i] + y;
                int nz = dz[i] + z;
                if (0 <= nx && nx < w && 0 <= ny && ny < h && 0 <= nz && nz < box) {
                    if (day[nz][ny][nx] == -1 && a[nz][ny][nx] != -1) {
                        day[nz][ny][nx] = day[z][y][x] +1;
                        queue.add(List.of(nx, ny, nz));
                    }
                }
            }
        }

        int maxDay = -1;
        boolean notRiped = false;
        for (int z = 0; z < box; z++) {
            for (int y = 0; y < h; y++) {
                for (int x = 0; x < w; x++) {
                    if (day[z][y][x] == -1 && a[z][y][x] == 0) {
                        notRiped = true;
                    }
                    maxDay = Math.max(maxDay, day[z][y][x]);
                }
            }
        }

        System.out.println(notRiped ? -1 : maxDay);
    }
}

// 1초
// 100 * 100 * 100 = 100 0000 < 1초
// BFS