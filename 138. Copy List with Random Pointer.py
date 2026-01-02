"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        node_index = {} 
        cur = head

        idx = 0 
        while cur is not None:
            node_index[cur] = idx 
            idx += 1
            cur = cur.next
        
        cur = head  
        new = []
        random_index = []
        while cur is not None:
            new.append(Node(cur.val))
            random_index.append(node_index.get(cur.random))
            cur = cur.next

        new.append(None)

        for i, n in enumerate(new[:-1]):
            new[i].next = new[i+1] 
            new[i].random = new[random_index[i]] if random_index[i] is not None else None
        
        return new[0]
        
