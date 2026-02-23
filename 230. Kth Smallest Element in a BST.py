# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        a = []
        def inorder(node):
            if node.left is not None:
                inorder(node.left)
            a.append(node.val)
            if node.right is not None:
                inorder(node.right)
        inorder(root)
        return a[k-1]
