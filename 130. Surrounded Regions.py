class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        dx = [0, 1, 0, -1]
        dy = [1, 0, -1, 0]
        visit = [[False] * len(board[0]) for _ in range(len(board))]
        
        def check(sx, sy):
            queue = collections.deque([(sx, sy)])
            visited = set([(sx, sy)])
            visit[sy][sx] = True
            surrounded = True

            while queue:
                x, y = queue.popleft()
                for i in range(4):
                    nx = dx[i] + x 
                    ny = dy[i] + y
                    if 0 <= nx < len(board[0]) and 0 <= ny < len(board):
                        if not visit[ny][nx] and board[ny][nx] == 'O':
                            visit[ny][nx] = True
                            visited.add((nx, ny))
                            queue.append((nx, ny))
                    else:
                        surrounded = False
            if surrounded:
                for x, y in visited:
                    board[y][x] = 'X' 
        
        for y in range(len(board)):
            for x in range(len(board[0])):
                if board[y][x] == 'O' and not visit[y][x]:
                    check(x, y)
        
            


                
            

