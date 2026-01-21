# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, inorder: list[int], postorder: list[int]) -> TreeNode:
        if len(postorder) == 1:
            return TreeNode(postorder[-1])
        if len(postorder) == 0:
            return 

        root = TreeNode(postorder[-1])
        inorder_root_idx = inorder.index(root.val)

        root.left = self.buildTree(inorder[:inorder_root_idx], postorder[:inorder_root_idx])
        root.right = self.buildTree(inorder[inorder_root_idx+1:], postorder[inorder_root_idx:-1])

        return root
