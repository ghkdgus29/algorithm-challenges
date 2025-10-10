# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(
        self, root1: Optional[TreeNode], root2: Optional[TreeNode]
    ) -> Optional[TreeNode]:
        def merge(node1, node2):
            node = None
            if node1 and node2:
                node = TreeNode(node1.val + node2.val)
                node.left = merge(node1.left, node2.left)
                node.right = merge(node1.right, node2.right)

            elif node1:
                node = TreeNode(node1.val)
                node.left = merge(node1.left, None)
                node.right = merge(node1.right, None)

            elif node2:
                node = TreeNode(node2.val)
                node.left = merge(None, node2.left)
                node.right = merge(None, node2.right)

            return node

        return merge(root1, root2)
