# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        def make(sub_inorder):
            if sub_inorder:
                value = preorder.pop(0)
                node = TreeNode(value)

                fivot = sub_inorder.index(value)
                node.left = make(sub_inorder[:fivot])
                node.right = make(sub_inorder[fivot + 1 :])

                return node

        return make(inorder)
