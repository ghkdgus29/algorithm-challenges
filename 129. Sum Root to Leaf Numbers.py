# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        total = 0
        def accumulate(node, acc):
            if node.left is None and node.right is None:
                nonlocal total
                total += (acc * 10 + node.val)
                return 
            
            if node.left is not None:
                accumulate(node.left, acc*10 + node.val)
            if node.right is not None:
                accumulate(node.right, acc*10 + node.val)
        
        accumulate(root, 0)
        return total
        
