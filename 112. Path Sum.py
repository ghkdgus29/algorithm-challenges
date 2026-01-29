# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        def accmulate(node, acc):
            if node.left is None and node.right is None:
                return acc + node.val == targetSum
            left = False
            if node.left is not None:
                left = accmulate(node.left, acc + node.val)
            right = False
            if node.right is not None:
                right = accmulate(node.right, acc + node.val)
            return left or right
        
        if root is None:
            return False
        return accmulate(root, 0)
