# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        ans = 0

        def go(node):
            nonlocal ans
            left_same_value_edge = right_same_value_edge = 0
            if node.left:
                left_edge = go(node.left)
                if node.val == node.left.val:
                    left_same_value_edge = left_edge + 1
            if node.right:
                right_edge = go(node.right)
                if node.right.val == node.val:
                    right_same_value_edge = right_edge + 1
            ans = max(ans, left_same_value_edge + right_same_value_edge)
            return max(left_same_value_edge, right_same_value_edge)

        go(root)
        return ans
