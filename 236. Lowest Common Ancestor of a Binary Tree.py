# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

NodeInfo = collections.namedtuple('NodeInfo', ['parent', 'depth'])

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        node_info = {root: NodeInfo(parent=None, depth=0)}

        def make_node_info(node, depth):
            if node.left is not None:
                node_info[node.left] = NodeInfo(parent=node, depth=depth+1)
                make_node_info(node.left, depth+1)
            
            if node.right is not None:
                node_info[node.right] = NodeInfo(parent=node, depth=depth+1)
                make_node_info(node.right, depth+1)
        
        make_node_info(root,0)

        older_node, younger_node = (p, q) if node_info[p].depth < node_info[q].depth else (q, p)

        while node_info[older_node].depth != node_info[younger_node].depth:
            younger_node = node_info[younger_node].parent
        
        while older_node != younger_node:
            older_node = node_info[older_node].parent
            younger_node = node_info[younger_node].parent
        
        return older_node
