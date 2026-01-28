# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        def connect(node):
            print(node)
            right_child = node.right 

            node.right = node.left 
            if node.left is not None:
                connect(node.left)

            end_node = node.left if node.left is not None else node
            node.left = None
            
            while end_node.right is not None:
                end_node = end_node.right 
            end_node.right = right_child

            if right_child is not None:
                connect(right_child)
        
        if root is None:
            return 
        connect(root)

        
