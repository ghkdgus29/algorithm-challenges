# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:
        nodes = []

        def inorder(node):
            if node.left:
                inorder(node.left)
            nodes.append(node.val)
            if node.right:
                inorder(node.right)

        inorder(root)

        return sum(nodes[nodes.index(low) : nodes.index(high) + 1])
