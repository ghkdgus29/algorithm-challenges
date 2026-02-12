# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []

        collector = collections.defaultdict(list)
        queue = collections.deque([(root, 0)])
        
        while queue:
            cur, depth = queue.popleft()
            collector[depth].append(cur.val)
        
            if cur.left is not None:
                queue.append((cur.left, depth + 1))
            if cur.right is not None:
                queue.append((cur.right, depth + 1))
        
        return list(collector.values())
        
