# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
import ast


class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """

        result = ["#"]
        if not root:
            return str(result)
        queue = collections.deque([root])
        while queue:
            cur = queue.popleft()
            if cur == "#":
                result.append("#")
                continue
            result.append(cur.val)
            queue.append(cur.left if cur.left else "#")
            queue.append(cur.right if cur.right else "#")

        return str(result)

    def deserialize(self, data):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """
        values = ast.literal_eval(data)
        if len(values) == 1:
            return

        root = TreeNode(values[1])
        queue = collections.deque([root])
        idx = 1
        while queue:
            node = queue.popleft()
            if values[idx + 1] != "#":
                node.left = TreeNode(values[idx + 1])
                queue.append(node.left)

            if values[idx + 2] != "#":
                node.right = TreeNode(values[idx + 2])
                queue.append(node.right)

            idx += 2
        return root

        nodes = [TreeNode(val) if val != "#" else None for val in serialized]
        print(serialized)
        for i in range(1, len(nodes) // 2):
            if not nodes[i]:
                continue
            nodes[i].left = nodes[2 * i]
            nodes[i].right = nodes[2 * i + 1]
            print(nodes[i], i)

        return nodes[1]


# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
