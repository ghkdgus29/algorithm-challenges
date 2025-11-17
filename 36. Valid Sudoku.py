class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in board: 
            checker = set()
            for ch in row:
                if ch != '.':
                    if ch in checker:
                        return False
                    checker.add(ch)
        
        for x in range(9):
            checker = set()
            for y in range(9):
                ch = board[y][x]
                if ch != '.':
                    if ch in checker:
                        return False
                    checker.add(ch)
        

        for y_offset in range(0, 9, 3):
            for x_offset in range(0, 9, 3):
                checker = set()
                for y in range(y_offset, y_offset+3):
                    for x in range(x_offset, x_offset+3):
                        ch = board[y][x]
                        if ch != '.':
                            if ch in checker:
                                return False
                            checker.add(ch)

        
        return True
        
