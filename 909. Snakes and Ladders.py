class Solution:
    def snakesAndLadders(self, board: List[List[int]]) -> int:
        n = len(board)
        LEFT, RIGHT = 0, 1

        def find_dir(pos):
            return RIGHT if ((pos-1)//n) % 2 == 0 else LEFT

        def find_coordinate(pos):
            dir = find_dir(pos)
            y = n - (pos-1)//n - 1
            if dir == RIGHT:
                x = pos % n - 1 if pos % n != 0 else n - 1
            else:
                x = n - pos % n if pos % n != 0 else 0
            return (x, y)
        

        queue = collections.deque([(1, 0)])
        
        dist = [[-1] * n for _ in range(n)]
        while queue:
            cur_pos, dice_cnt = queue.popleft()
            
            for i in range(1, 7):
                if cur_pos + i > n**2:
                    continue
                nxt_pos = cur_pos + i 
                nx, ny = find_coordinate(nxt_pos)
                if board[ny][nx] != -1:
                    nxt_pos = board[ny][nx]
                    nx, ny = find_coordinate(nxt_pos)
                if dist[ny][nx] == -1 or dist[ny][nx] > dice_cnt + 1:
                    dist[ny][nx] = dice_cnt + 1
                    queue.append((nxt_pos, dice_cnt + 1))

        if n % 2 == 0:
            return dist[0][0]
        return dist[0][n-1]
                    

                

            

        
