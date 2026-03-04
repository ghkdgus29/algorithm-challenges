"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if node is None:
            return 

        mapper = {node: Node(node.val)}
        
        queue = collections.deque([node])
        while queue:
            cur = queue.popleft()
            new_node = mapper[cur]
            for nxt in cur.neighbors:
                if nxt not in mapper:
                    mapper[nxt] = Node(nxt.val)
                    queue.append(nxt)
                new_node.neighbors.append(mapper[nxt])
        return mapper[node]
                    



        
