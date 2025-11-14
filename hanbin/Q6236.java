import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
        StringTokenizer st = new StringTokenizer((br.readLine()));

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int[] arr = new int[N];

        for (int i = 0; i < N; i++){
            arr[i] = Integer.parseInt(br.readLine());
        }

        int i = binarySearch(arr, M);
        System.out.print(i);
    }

    private static int binarySearch(int[] arr, int target){
        int l = 0;
        for (int i : arr){
            l = Math.max(l, i);
        }
        int r = 10000 * 100000;

        while (l <= r){
            int K = l + (r - l) / 2;

            int count = 1;
            int current = K;
            for (int money : arr){
                current -= money;

                if (current < 0){
                    ++count;
                    current = K - money;
                }
            }

            if (count > target){
                l = K + 1;
            } else {
                r = K - 1;
            }
        }
        return l;
    }
}
