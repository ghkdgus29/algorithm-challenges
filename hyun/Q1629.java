import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Q1629 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        long a = Long.parseLong(st.nextToken());
        long b = Long.parseLong(st.nextToken());
        long c = Long.parseLong(st.nextToken());

        System.out.println(pow(a, b, c));
    }

    private static long pow(long base, long exponent, long mod) {
        if (exponent == 1) {
            return base % mod;
        }

        long num = pow(base, exponent / 2, mod);

        if (exponent % 2 == 1) {
            return ((num * num % mod) * (base % mod)) % mod;
        }
        return num * num % mod;
    }
}

// 지수 법칙
// a^(n+m) = a^n * a^m

// 모듈러 성질
// (a*b) % c = ((a%c) * (b%c)) % c

// 제한시간 0.5초
// log2_(2147483647) = 31 < 0.5 초