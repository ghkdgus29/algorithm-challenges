class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # circular check
        graph = collections.defaultdict(list)
        for n0, n1 in prerequisites:
            graph[n0].append(n1)

        WHITE, GRAY, BLACK = 0, 1, 2
        color = collections.defaultdict(int)

        def has_cycle(node):
            color[node] = GRAY
            for next in graph.get(node, []):
                if color[next] == GRAY:
                    return True
                if color[next] == WHITE and has_cycle(next):
                    return True
            color[node] = BLACK
            return False

        for node in graph.keys():
            if color[node] == WHITE and has_cycle(node):
                return False
        return True
