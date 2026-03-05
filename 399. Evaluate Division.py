class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        graph = collections.defaultdict(list)
        for (n1, n2), val in zip(equations, values):
            graph[n1].append((n2, val))
            graph[n2].append((n1, 1/float(val)))
        
        node_info = {}
        group_idx = 0
        for node in graph.keys():
            if node not in node_info:
                group_idx += 1
                queue = collections.deque([node])
                node_info[node] = (1, group_idx)

                while queue:
                    cur = queue.popleft()
                    cur_val, cur_group_idx = node_info[cur]
                    for nxt, val in graph.get(cur, []):
                        if nxt not in node_info:
                            queue.append(nxt)
                            node_info[nxt] = (float(cur_val) / float(val), cur_group_idx)
        
        ans = []
        for q1, q2 in queries:
            if q1 not in node_info or q2 not in node_info:
                ans.append(-1) 
            elif node_info[q1][1] != node_info[q2][1]:
                ans.append(-1)
            else:
                ans.append(node_info[q1][0] / node_info[q2][0])
        return ans 

                
                
                

        
