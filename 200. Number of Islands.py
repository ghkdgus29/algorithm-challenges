class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        dx = [0, 1, 0, -1]
        dy = [1, 0, -1, 0]
        visit = [[False] * len(grid[0]) for _ in range(len(grid))]

        def bfs(sx, sy):
            queue = collections.deque([(sx, sy)])
            visit[sy][sx] = True 
            
            while queue:
                x, y = queue.popleft()
                for i in range(4):
                    nx = dx[i] + x 
                    ny = dy[i] + y 
                    if 0 <= nx < len(grid[0]) and 0 <= ny < len(grid):
                        if not visit[ny][nx] and grid[ny][nx] == '1': 
                            visit[ny][nx] = True 
                            queue.append((nx, ny)) 
            
        ans = 0
        for y in range(len(grid)):
            for x in range(len(grid[0])):
                if grid[y][x] == '1' and not visit[y][x]: 
                    ans += 1
                    bfs(x, y)
        return ans 
