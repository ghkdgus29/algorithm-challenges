class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        h, w = len(matrix), len(matrix[0])
        RIGHT, DOWN, LEFT, UP = 0, 1, 2, 3 
        dx = [1, 0, -1, 0]
        dy = [0, 1, 0, -1]

        visit = [[False] * w for _ in range(h)]
        count = h*w 
        direction = RIGHT
        nx, ny = -1, 0
        ans = []
        while count > 0:
            nx += dx[direction]
            ny += dy[direction]
            ans.append(matrix[ny][nx])
            visit[ny][nx] = True

            nnx = nx + dx[direction]
            nny = ny + dy[direction]
            if not (0 <= nnx < w and 0 <= nny < h) or visit[nny][nnx]:
                direction = (direction + 1) % 4

            count -= 1
        
        return ans



        
       
        

        
            
