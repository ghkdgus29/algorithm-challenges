# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDiffInBST(self, root: Optional[TreeNode]) -> int:
        diff = sys.maxsize
        prev = None

        def inorder(node):
            nonlocal prev, diff
            if node.left:
                inorder(node.left)
            if prev is not None:
                diff = min(diff, abs(prev - node.val))
            prev = node.val
            if node.right:
                inorder(node.right)

        inorder(root)
        return diff
