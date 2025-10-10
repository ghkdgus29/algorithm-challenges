# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # post-order

        ans = 0

        def go(node):
            nonlocal ans
            left_edge = right_edge = 0
            if node.left:
                left_edge = go(node.left) + 1
            if node.right:
                right_edge = go(node.right) + 1
            ans = max(ans, left_edge + right_edge)
            return max(left_edge, right_edge)

        go(root)
        return ans
