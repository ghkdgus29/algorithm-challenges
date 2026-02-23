# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
        nums = []
        def inorder(node):
            if node.left is not None:
                inorder(node.left)
            nums.append(node.val)
            if node.right is not None:
                inorder(node.right)
        inorder(root)
        ans = 10**5 + 1
        for i in range(len(nums) - 1):
            ans = min(ans, (nums[i+1] - nums[i]))
        return ans
            


        
