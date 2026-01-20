# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: list[int], inorder: list[int]) -> TreeNode:
        if len(preorder) == 1:
            return TreeNode(preorder[0])
        if len(preorder) == 0:
            return 

        root = TreeNode(preorder[0])
        inorder_root_idx = inorder.index(root.val)
        
        root.left = self.buildTree(preorder[1: inorder_root_idx+1], inorder[:inorder_root_idx])
        root.right = self.buildTree(preorder[inorder_root_idx+1:], inorder[inorder_root_idx+1:])

        return root
            
        
