class Solution:
    def exist(self, board: list[list[str]], word: str) -> bool:
        dx = [0, 1, 0, -1]
        dy = [1, 0, -1, 0]

        word_idx = {i: c for i, c in enumerate(word)}

        visit = [[False] * len(board[0]) for _ in range(len(board))]

        def go(idx, sx, sy):
            if idx == len(word):
                return True

            flag = False
            for i in range(4):
                nx = dx[i] + sx
                ny = dy[i] + sy
                if 0 <= nx < len(board[0]) and 0 <= ny < len(board):
                    if not visit[ny][nx] and word_idx[idx] == board[ny][nx]:
                        visit[ny][nx] = True
                        flag |= go(idx + 1, nx, ny)
                        visit[ny][nx] = False

            return flag

        for y in range(len(board)):
            for x in range(len(board[0])):
                if word_idx[0] == board[y][x]:
                    visit[y][x] = True
                    if go(1, x, y):
                        return True
                    visit[y][x] = False
        return False
