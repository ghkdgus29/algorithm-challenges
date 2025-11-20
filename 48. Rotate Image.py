class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:
        dx = [1, 0, -1, 0]
        dy = [0, 1, 0, -1]
        n = len(matrix)

        def move_and_swap(step: int, sx: int, sy: int, offset: int):
            direction = 0
            nx, ny = sx, sy
            prev = matrix[sy][sx]
            for _ in range(4):
                for _ in range(step):
                    nnx = nx + dx[direction]
                    nny = ny + dy[direction]
                    if not (
                        0 + offset <= nnx < n - offset
                        and 0 + offset <= nny < n - offset
                    ):
                        direction = (direction + 1) % 4
                    nx = nx + dx[direction]
                    ny = ny + dy[direction]
                matrix[ny][nx], prev = prev, matrix[ny][nx]

        size = n
        for i in range(n // 2):
            for j in range(size - 1):
                move_and_swap(size - 1, i + j, i, i)
            size -= 2


