class Solution:
    def generateParenthesis(self, n: int) -> list[str]:
        ans = []

        def go(open_b, close_b, picks):
            if open_b > close_b:
                return
            if open_b < 0 or close_b < 0:
                return
            if open_b == 0 and close_b == 0:
                ans.append("".join(picks))
                return

            picks.append("(")
            go(open_b - 1, close_b, picks)
            picks.pop()

            picks.append(")")
            go(open_b, close_b - 1, picks)
            picks.pop()

        go(n, n, [])
        return ans
