# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    ans = -sys.maxsize

    def maxPathSum(self, root: TreeNode) -> int:
        def accumulate(node):
            left = right = 0
            if node.left is not None:
                left = accumulate(node.left)
            if node.right is not None: 
                right = accumulate(node.right)
            
            self.ans = max(self.ans, node.val + max(left, right, left+right, 0))
            return max(node.val, node.val + left, node.val + right) 

        
        accumulate(root)
        return self.ans
