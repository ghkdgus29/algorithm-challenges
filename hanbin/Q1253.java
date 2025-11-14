import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
        StringTokenizer st;

        int N = Integer.parseInt(br.readLine());
        st = new StringTokenizer((br.readLine()));

        int[] arr = new int[N];

        for (int i = 0; i < N; i++){
            arr[i] = Integer.parseInt((st.nextToken()));
        }

        Arrays.sort(arr);

        int answer = 0;

        for (int i = 0; i < N; i++){
            long currentValue = arr[i];

            int l = 0;
            int r = N - 1;

            while(true){
                if (l == i) ++l;
                if (r == i) --r;

                if (l >= r) break;

                long sum = arr[l] + arr[r];

                if (sum > currentValue){
                    --r;
                } else if (sum < currentValue){
                    ++l;
                } else {
                    ++answer;
                    break;
                }
            }
        }

        System.out.print(answer);
    }
}
