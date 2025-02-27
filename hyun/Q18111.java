import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q18111 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int h = Integer.parseInt(st.nextToken());
        int w = Integer.parseInt(st.nextToken());
        int b = Integer.parseInt(st.nextToken());
        int[][] arr = new int[h][w];

        for (int i = 0; i < h; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < w; j++) {
                arr[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        int sec = Integer.MAX_VALUE;
        int height = Integer.MIN_VALUE;
        for (int t = 0; t <= 256; t++) {
            int curSec = 0;
            int curBlock = b;
            for (int y = 0; y < h; y++) {
                for (int x = 0; x < w; x++) {
                    if (arr[y][x] > t) {
                        curBlock += arr[y][x] - t;
                        curSec += (arr[y][x] - t) * 2;
                    } else if (arr[y][x] < t) {
                        curBlock -= t - arr[y][x];
                        curSec += t - arr[y][x];
                    }
                }
            }
            if (curBlock < 0) {
                break;
            }
            if (curSec <= sec) {
                sec = Math.min(curSec, sec);
                height = t;
            }
        }
        System.out.println(sec + " " + height);
    }
}

// 제한시간 1초
// 500 * 500 * 256 = 6400 0000 < 1초
// 그리디 맛 브루트포스 같음