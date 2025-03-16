import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q10830 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        long b = Long.parseLong(st.nextToken());

        long[][] base = new long[n][n];

        for (int i = 0; i < n; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < n; j++) {
                base[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        long[][] ans = pow(base, b);

        for (int y = 0; y < base.length; y++) {
            for (int x = 0; x < base.length; x++) {
                System.out.print(ans[y][x] + " ");
            }
            System.out.println();
        }

    }

    private static long[][] pow(long[][] base, long exponent) {
        if (exponent == 1) {
            return mod(base);
        }

        long[][] next = pow(base, exponent / 2);
        if (exponent % 2 == 1) {
            return mod(multiply(mod(multiply(next, next)), mod(base)));
        }

        return mod(multiply(next, next));
    }

    private static long[][] multiply(long[][] a, long[][] b) {
        long[][] next = new long[a.length][a.length];
        for (int y = 0; y < a.length; y++) {
            for (int x = 0; x < a.length; x++) {
                for (int i = 0; i < a.length; i++) {
                    next[y][x] += a[y][i] * b[i][x];
                }
            }
        }
        return next;
    }

    private static long[][] mod(long[][] base) {
        for (int y = 0; y < base.length; y++) {
            for (int x = 0; x < base.length; x++) {
                base[y][x] %= 1000;
            }
        }
        return base;
    }
}

