import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.SortedMap;
import java.util.TreeMap;

public class Q7662 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        for (int l = 0; l < t; l++) {
            SortedMap<Integer, Integer> queue = new TreeMap<>();
            int cnt = Integer.parseInt(br.readLine());
            for (int i = 0; i < cnt; i++) {
                String[] ins = br.readLine().split(" ");
                if (ins[0].equals("I")) {
                    int num = Integer.parseInt(ins[1]);
                    queue.put(num, queue.getOrDefault(num, 0) + 1);
                } else if (!queue.isEmpty()) {
                    if (ins[1].equals("-1")) {
                        queue.replace(queue.firstKey(), queue.get(queue.firstKey()) - 1);
                        if (queue.get(queue.firstKey()) == 0){
                            queue.remove(queue.firstKey());
                        }
                    } else {
                        queue.replace(queue.lastKey(), queue.get(queue.lastKey()) - 1);
                        if (queue.get(queue.lastKey()) == 0){
                            queue.remove(queue.lastKey());
                        }
                    }
                }
            }
            if (queue.isEmpty()) {
                System.out.println("EMPTY");
            } else {
                System.out.println(queue.lastKey()+ " " + queue.firstKey());
            }
        }
    }
}
