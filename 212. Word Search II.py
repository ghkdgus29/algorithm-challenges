class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        trie = {}
        for word in words:
            node = trie
            for ch in word:
                node = node.setdefault(ch, {})
            node["__end__"] = word

        dx = [0, 1, 0, -1]
        dy = [1, 0, -1, 0]
        visit = [[False] * len(board[0]) for _ in range(len(board))]
        ans = set()

        def traverse(sx, sy, nodes):
            if visit[sy][sx]:
                return

            if "__end__" in nodes:
                ans.add(nodes["__end__"])

            visit[sy][sx] = True 
            
            for i in range(4):
                nx = dx[i] + sx
                ny = dy[i] + sy
                if 0 <= nx < len(board[0]) and 0 <= ny < len(board):
                    if board[ny][nx] in nodes:
                        traverse(nx, ny, nodes[board[ny][nx]])

            visit[sy][sx] = False
            
        for y in range(len(board)):
            for x in range(len(board[0])):
                if board[y][x] in trie:
                    traverse(x, y, trie[board[y][x]])
              
        return list(ans)
