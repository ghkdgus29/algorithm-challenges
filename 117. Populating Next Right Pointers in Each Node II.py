"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        def connect_child(node):
            unconnected_child = None
            if node.left is not None and node.right is not None:
                node.left.next = node.right
                unconnected_child = node.right 
            else:
                unconnected_child = node.left if node.left is not None else node.right 
                if unconnected_child is None:
                    return  
            
            cousine = node.next 
            while cousine is not None:
                if cousine.left is not None:
                    unconnected_child.next = cousine.left 
                    break 
                
                if cousine.right is not None:
                    unconnected_child.next = cousine.right
                    break

                cousine = cousine.next
            


        if root is None:  
            return root

        queue = collections.deque([root])
        while queue:
            cur = queue.popleft()
            connect_child(cur)
            if cur.left is not None:
                queue.append(cur.left)
            if cur.right is not None:
                queue.append(cur.right)
        return root
