"""
# Definition for a QuadTree node.
class Node:
    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft, bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight
"""

class Solution:
    def construct(self, grid: list[list[int]]) -> "Node":
        def divide(length, sx, sy):
            all_same = True
            for y in range(length):
                for x in range(length):
                    if grid[sy][sx] != grid[sy + y][sx + x]:
                        all_same = False

            if all_same:
                return Node(grid[sy][sx], True, None, None, None, None)

            half_length = length // 2
            return Node(
                None,
                False,
                divide(half_length, sx, sy),
                divide(half_length, sx + half_length, sy),
                divide(half_length, sx, sy + half_length),
                divide(half_length, sx + half_length, sy + half_length),
            )
        return divide(len(grid), 0, 0)
