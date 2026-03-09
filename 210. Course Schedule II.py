class Solution:
    def findOrder(self, numCourses: int, prerequisites: list[list[int]]) -> list[int]:
        graph = collections.defaultdict(list)
        precourse = collections.defaultdict(set)
        
        for n1, n2 in prerequisites:
            graph[n2].append(n1)
            precourse[n1].add(n2) 
        
        for node in range(numCourses):
            if node not in graph:
                graph[node].append(-1)

        visit = set()
        def has_cycle(stack, cur):
            if cur in stack:
                return True 
            if cur in visit: 
                return False
            
            visit.add(cur)
            stack.add(cur)
            for nxt in graph.get(cur, []):
                if has_cycle(stack, nxt):
                    stack.remove(cur)
                    return True
            stack.remove(cur)
            return False 
        
        for start in graph.keys():
            if has_cycle(set(), start):
                return []
            
        
        ans = []
        visit = set()
        for start in graph.keys():
            if start in precourse or start in visit:
                continue 

            visit.add(start)
            queue = collections.deque([start])
            while queue:
                cur = queue.popleft()
                ans.append(cur)
                for nxt in graph.get(cur, []):
                    if nxt in precourse:
                        precourse[nxt].remove(cur)
                        if len(precourse[nxt]) == 0:
                            precourse.pop(nxt) 
                    if nxt not in precourse and nxt != -1:
                        queue.append(nxt)
                        visit.add(nxt)
            
        return ans if numCourses >= 2 else [i for i in range(numCourses)] 
