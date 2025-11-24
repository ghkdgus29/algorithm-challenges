class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        # 2-3 neighbor -> live
        # 3 neighbor -> dead2live 

        dx = [0, 1, 1, 1, 0, -1, -1, -1]
        dy = [-1, -1, 0, 1, 1, 1, 0, -1]

        def check(x, y) -> bool: 
            cnt = 0 
            for i in range(8):
                nx = dx[i] + x 
                ny = dy[i] + y 
                if 0 <= nx < len(board[0]) and 0 <= ny < len(board):
                    if board[ny][nx] == 1:
                        cnt += 1 
            
            if board[y][x] == 1:
                if cnt < 2 or cnt > 3:
                    return True 
            
            if board[y][x] == 0:
                if cnt == 3:
                    return True
                
            return False 
        
        flip = []
        for y in range(len(board)):
            for x in range(len(board[0])):
                if check(x, y):
                    flip.append((x, y)) 
        
        for x, y in flip:
            board[y][x] = 1 - board[y][x]
