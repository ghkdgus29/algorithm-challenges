class Solution:
    def findMinHeightTrees(self, n: int, edges: List[List[int]]) -> List[int]:
        graph = collections.defaultdict(list)
        for n1, n2 in edges:
            graph[n1].append(n2)
            graph[n2].append(n1)

        leaves = [node for node in range(n) if len(graph[node]) == 1]

        while n > 2:
            next_leaves = []
            n -= len(leaves)
            for leaf in leaves:
                leaf_candidate = graph[leaf].pop()
                graph.pop(leaf)

                graph[leaf_candidate].remove(leaf)
                if len(graph[leaf_candidate]) == 1:
                    next_leaves.append(leaf_candidate)
            leaves = next_leaves
        return list(graph.keys())
