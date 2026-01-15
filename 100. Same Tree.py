# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        def memo(root):
            memo = []
            queue = collections.deque([root])

            while queue:
                cur = queue.popleft()
                if cur is None:
                    memo.append(None)
                else:
                    memo.append(cur.val)
                    queue.append(cur.left)
                    queue.append(cur.right)
            
            return tuple(memo)

        return memo(p) == memo(q)
