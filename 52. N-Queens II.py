class MySolution:
    def totalNQueens(self, n: int) -> int:
        ans = 0

        def is_possible(picks: list, x, y):
            for px, py in picks:
                # 가로축 검사
                if py == y:
                    return False

                # 세로축 검사
                if px == x:
                    return False

                # 대각축 검사
                # 오른쪽 아래로 이동
                gap = min(n - 1 - x, n - 1 - y)
                p_gap = min(n - 1 - px, n - 1 - py)
                if (x + gap == px + p_gap) and (y + gap == py + p_gap):
                    return False

                # 오른쪽 위로 이동
                gap = min(n - 1 - x, y)
                p_gap = min(n - 1 - px, py)
                if (x + gap == px + p_gap) and (y - gap == py - p_gap):
                    return False
            return True

        def go(picks: list, idx):
            if len(picks) == n:
                nonlocal ans
                ans += 1
                return

            for i in range(idx, n * n):
                x = i % n
                y = i // n
                if is_possible(picks, x, y):
                    picks.append((x, y))
                    go(picks, i + 1)
                    picks.pop()

        go([], 0)
        return ans


class Solution:
    def totalNQueens(self, n: int) -> int:
        res, col, pos, neg = 0, set(), set(), set()

        # r -> row, c -> column
        def backtracking(r):
            if n == r:
                nonlocal res
                res += 1
            for c in range(n):
                if c in col or (c + r) in pos or (r - c) in neg:
                    continue
                col.add(c)
                pos.add(c + r)  # 행, 열 합이 같으면 같은 대각선 /
                neg.add(r - c)  # 행, 열 차가 같으면 같은 대각선 \
                backtracking(r + 1)
                col.remove(c)
                pos.remove(c + r)
                neg.remove(r - c)

        backtracking(0)

        return res
