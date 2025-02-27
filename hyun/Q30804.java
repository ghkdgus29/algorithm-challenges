import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q30804 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] a = new int[n];
        for (int i = 0; i < n; i++) {
            a[i] = Integer.parseInt(st.nextToken());
        }

        Map<Integer, Integer> counter = new HashMap<>();
        int left = 0;
        int maxLength = -1;
        for (int right = 0; right < n; right++) {
            counter.put(a[right], counter.getOrDefault(a[right], 0) + 1);
            while (counter.size() > 2) {
                counter.replace(a[left], counter.get(a[left]) - 1);
                if (counter.get(a[left]) == 0) {
                    counter.remove(a[left]);
                }
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }

        System.out.println(maxLength);
    }
}

// 제한시간 2초
// 20 0000 * 2 < 1초
// 투 포인터