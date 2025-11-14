import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
        StringTokenizer st = new StringTokenizer((br.readLine()));

        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        Item[] items = new Item[N];
        for (int i = 0; i < N; i++){
            st = new StringTokenizer(br.readLine());
            int W = Integer.parseInt(st.nextToken());
            int V = Integer.parseInt(st.nextToken());

            items[i] = new Item(W,V);
        }

        int[][] dp = new int[N+1][K+1];

        for (int i = 1; i <= N; i++){
            Item item = items[i-1];

            for (int j = 1; j <= K; j++){
                if (j < item.weight){
                    dp[i][j] = dp[i-1][j];
                } else {
                    dp[i][j] = Math.max(dp[i-1][j-item.weight] + item.value,dp[i-1][j]);
                }
            }
        }

        System.out.print(dp[N][K]);
    }

    private static class Item {
        int weight;
        int value;

        public Item(int weight, int value){
            this.weight = weight;
            this.value = value;
        }


    }
}

