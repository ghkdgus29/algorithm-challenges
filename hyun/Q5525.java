import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Q5525 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        br.readLine();
        String s = br.readLine();
        List<Integer> a = new ArrayList<>();
        int cnt = 0;
        int flag = 0;
        for (int i = 0; i < s.length(); i++) {
            if (flag == 2 && s.charAt(i) == 'I') {
                flag = 1;
                cnt++;
            } else if (flag == 1 && s.charAt(i) == 'O') {
                flag = 2;
            } else {
                flag = s.charAt(i) == 'I' ? 1 : 0;
                if (cnt > 0) {
                    a.add(cnt);
                    cnt = 0;
                }
            }
        }
        if (cnt > 0) {
            a.add(cnt);
        }

        int ans = 0;
        for (int num : a) {
            if (n > num) {
                continue;
            }
            ans += num - n + 1;
        }
        System.out.println(ans);
    }
}
// 1초
// 100 0000 < 1초
// 브루트포스 ?, 조건문 ?