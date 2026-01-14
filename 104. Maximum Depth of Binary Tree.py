# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        def go(depth, node):
            left_depth = right_depth = 0
            if node.left:
                left_depth = go(depth+1, node.left)
            if node.right:
                right_depth = go(depth+1, node.right)
            
            return max(left_depth, right_depth, depth)
        
        return go(1, root) if root else 0

