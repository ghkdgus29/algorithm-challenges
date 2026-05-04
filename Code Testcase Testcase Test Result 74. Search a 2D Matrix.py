class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        def search(a: list[int]) -> tuple[bool, int]:
            left = 0
            right = len(a) - 1
            while left <= right:
                mid = (left + right) // 2
                if a[mid] < target:
                    left = mid + 1
                elif a[mid] > target:
                    right = mid - 1
                else:
                    return True, mid
            return False, max(left - 1, 0)

        heads = [row[0] for row in matrix]
        find, row_idx = search(heads)
        if find:
            return True
        find, _ = search(matrix[row_idx])
        return find
