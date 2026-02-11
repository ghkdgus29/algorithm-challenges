# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        queue = collections.deque([(root, 0)])
        checker = {}
        while queue:
            cur, depth = queue.popleft()
            if depth in checker:
                checker[depth][0] += cur.val
                checker[depth][1] += 1
            else:
                checker[depth] = [cur.val, 1]

            if cur.left is not None:
                queue.append((cur.left, depth+1))
            if cur.right is not None:
                queue.append((cur.right, depth+1))
        
        return [v[0] / v[1] for v in checker.values()]
        
