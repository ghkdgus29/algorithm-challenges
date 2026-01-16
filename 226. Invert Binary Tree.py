# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def convert(node):
            if node is None:
                return node 
            
            return TreeNode(node.val, convert(node.right), convert(node.left))
        
        return convert(root)

            
