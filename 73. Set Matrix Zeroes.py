class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        zero_row = set()
        zero_col = set()
        for y in range(len(matrix)):
            for x in range(len(matrix[0])):
                if matrix[y][x] == 0:
                    zero_row.add(y)
                    zero_col.add(x)

        for x in zero_col:
            for y in range(len(matrix)):
                matrix[y][x] = 0

        for y in zero_row:
            for x in range(len(matrix[0])):
                matrix[y][x] = 0
