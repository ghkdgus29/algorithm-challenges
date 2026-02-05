# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class BSTIterator:

    def __init__(self, root: Optional[TreeNode]):
        self.arr = []
        self.index = -1
        def inorder(node):
            if node.left is not None:
                inorder(node.left)
            self.arr.append(node.val)
            if node.right is not None:
                inorder(node.right)
        inorder(root)
        

    def next(self) -> int:
        self.index += 1
        return self.arr[self.index]
        

    def hasNext(self) -> bool:
        return self.index + 1 < len(self.arr)
        


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()
