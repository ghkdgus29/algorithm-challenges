# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        # check edge diff

        ans = True

        def check(node):
            nonlocal ans
            left_edge = right_edge = 0
            if node.left:
                left_edge = check(node.left) + 1
            if node.right:
                right_edge = check(node.right) + 1

            if abs(left_edge - right_edge) > 1:
                ans = False
            return max(left_edge, right_edge)

        if root:
            check(root)
        return ans
