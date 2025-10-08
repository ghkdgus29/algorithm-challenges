class Solution:
    def findCheapestPrice(
        self, n: int, flights: List[List[int]], src: int, dst: int, k: int
    ) -> int:
        graph = collections.defaultdict(list)
        for n1, n2, p in flights:
            graph[n1].append((n2, p))

        queue = collections.deque([(src, 0, k)])
        dist = [-1] * n
        dist[src] = 0

        while queue:
            node, total_cost, stop_cnt = queue.popleft()

            if stop_cnt >= 0:
                for next, next_cost in graph[node]:
                    if dist[next] == -1 or dist[next] > total_cost + next_cost:
                        dist[next] = total_cost + next_cost
                        queue.append((next, total_cost + next_cost, stop_cnt - 1))
        return dist[dst]
