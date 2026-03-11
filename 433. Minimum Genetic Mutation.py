class Solution:
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        graph = collections.defaultdict(list)

        def calculate_distance(a, b):
            diff = 0
            for i in range(len(a)):
                if a[i] != b[i]:
                    diff += 1
            return diff
        
        queue = collections.deque([(startGene, 0)])
        visit = set([startGene])
        while queue:
            cur, count = queue.pop()

            if cur == endGene:
                return count

            for gene in bank:
                if gene not in visit:
                    if calculate_distance(cur, gene) == 1:
                        queue.append((gene, count+1))
                        visit.add(gene)
        return -1

