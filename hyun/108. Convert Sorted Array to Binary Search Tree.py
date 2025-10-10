# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        # split list and pick middle value
        def make(values):
            if not values:
                return None
            idx = len(values) // 2
            node = TreeNode(values[idx])
            node.left = make(values[:idx])
            node.right = make(values[idx + 1 :])
            return node

        return make(nums)
