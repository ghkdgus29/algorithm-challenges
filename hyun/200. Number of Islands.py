class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        def bfs(sx, sy):
            dx = [0, 1, 0, -1]
            dy = [1, 0, -1, 0]
            queue = collections.deque([(sx, sy)])
            visit[sy][sx] = True
            while queue:
                x, y = queue.popleft()
                for i in range(4):
                    nx = dx[i] + x
                    ny = dy[i] + y
                    if 0 <= nx < w and 0 <= ny < h:
                        if not visit[ny][nx] and grid[ny][nx] == "1":
                            queue.append((nx, ny))
                            visit[ny][nx] = True

        ans = 0

        h, w = len(grid), len(grid[0])
        visit = [[False] * w for _ in range(h)]
        for y in range(h):
            for x in range(w):
                if not visit[y][x] and grid[y][x] == "1":
                    ans += 1
                    bfs(x, y)
        return ans
