class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        graph = collections.defaultdict(list)
        for n1, n2, t in times:
            graph[n1].append((n2, t))

        dist = [0] + [-1] * n
        queue = collections.deque([k])
        dist[k] = 0
        while queue:
            node = queue.popleft()
            for next, t in graph[node]:
                if dist[next] == -1 or dist[next] > dist[node] + t:
                    queue.append(next)
                    dist[next] = dist[node] + t
        if -1 in dist:
            return -1
        return max(dist)
