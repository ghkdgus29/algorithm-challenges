# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        if root is None:
            return []

        checker = {}
        queue = collections.deque()
        queue.append((root, 0))
        while queue:
            node, depth = queue.popleft()
            checker[depth] = node.val
            if node.left is not None:
                queue.append((node.left, depth + 1))
            if node.right is not None:
                queue.append((node.right, depth + 1))
            
        return [k for k in checker.values()]

        
