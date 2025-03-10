import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class Q1043 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<>());
        }

        st = new StringTokenizer(br.readLine());
        int knowCount = Integer.parseInt(st.nextToken());
        List<Integer> knows = new ArrayList<>();
        for (int i = 0; i < knowCount; i++) {
            knows.add(Integer.parseInt(st.nextToken()));
        }

        List<List<Integer>> parties = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int partyCount = Integer.parseInt(st.nextToken());
            List<Integer> partyPeople = new ArrayList<>();
            for (int j = 0; j < partyCount; j++) {
                partyPeople.add(Integer.parseInt(st.nextToken()));
            }
            connectGraph(partyPeople, graph);
            parties.add(partyPeople);
        }

        Set<Integer> knowPeople = new HashSet<>();
        Queue<Integer> queue = new ArrayDeque<>();
        for (Integer knowPerson : knows) {
            if (!knowPeople.contains(knowPerson)) {
                queue.add(knowPerson);
                knowPeople.add(knowPerson);
                while (!queue.isEmpty()) {
                    int current = queue.remove();
                    for (int next : graph.get(current)) {
                        if (!knowPeople.contains(next)) {
                            queue.add(next);
                            knowPeople.add(next);
                        }
                    }
                }
            }
        }

        int ans = 0;
        for (List<Integer> party : parties) {
            boolean canLie = true;
            for (Integer partyPerson : party) {
                if (knowPeople.contains(partyPerson)) {
                    canLie = false;
                }
            }
            if (canLie) {
                ans++;
            }
        }

        System.out.println(ans);
    }

    private static void connectGraph(List<Integer> partyPeople, List<List<Integer>> graph) {
        for (int i = 0; i < partyPeople.size() - 1; i++) {
            for (int j = i + 1; j < partyPeople.size(); j++) {
                int v1 = partyPeople.get(i);
                int v2 = partyPeople.get(j);
                graph.get(v1).add(v2);
                graph.get(v2).add(v1);
            }
        }
    }
}

// 50 * 50 * 50 = 12 5000 < 2sec
// BFS