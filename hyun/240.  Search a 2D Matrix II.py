class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        if not matrix:
            return False

        x = len(matrix[0]) - 1
        y = 0

        while x >= 0 and y <= len(matrix) - 1:
            if matrix[y][x] == target:
                return True
            elif matrix[y][x] > target:
                x -= 1
            elif matrix[y][x] < target:
                y += 1

        return False
