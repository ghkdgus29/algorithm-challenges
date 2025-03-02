import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Q5430 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        for (int i = 0; i < t; i++) {
            boolean reversed = false;
            String ins = br.readLine();
            br.readLine();
            int[] numbers = Arrays.stream(br.readLine().replaceAll("[\\[\\]]", "").split(","))
                    .filter(s -> !s.isEmpty())
                    .mapToInt(Integer::parseInt).toArray();
            boolean[] pop = new boolean[numbers.length];
            int head = 0;
            int tail = numbers.length - 1;

            for (int j = 0; j < ins.length(); j++) {
                if (ins.charAt(j) == 'R') {
                    reversed = !reversed;
                } else {
                    if (reversed) {
                        if (tail >= 0) {
                            pop[tail] = true;
                        }
                        tail--;
                    } else {
                        if (head < numbers.length) {
                            pop[head] = true;
                        }
                        head++;
                    }
                }
            }

            if (head > tail + 1) {
                System.out.println("error");
            } else {
                StringBuilder sb = new StringBuilder();
                sb.append("[");
                if (reversed) {
                    for (int j = numbers.length - 1; j >= 0; j--) {
                        if (!pop[j]) {
                            sb.append(numbers[j] + ",");
                        }
                    }
                } else {
                    for (int j = 0; j < numbers.length; j++) {
                        if (!pop[j]) {
                            sb.append(numbers[j] + ",");
                        }
                    }
                }
                if (sb.charAt(sb.length() - 1) == ',') {
                    sb.deleteCharAt(sb.length() - 1);
                }
                sb.append("]");
                System.out.println(sb);
            }
        }
    }
}

// 1초
// 10 0000 < 1초
// 투 포인터