# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        
        def go(node):
            if node is None:
                return [None]
            return [node.val] + go(node.left) + go(node.right)
        
        def go_reverse(node):
            if node is None:
                return [None]
            return [node.val] + go_reverse(node.right) + go_reverse(node.left)

        left_orders = go(root.left)
        right_orders = go_reverse(root.right)
        return left_orders == right_orders
        
        
