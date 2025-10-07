class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        ans = []

        def go(picks, start):
            if len(picks) >= k:
                ans.append(picks)
                return

            for i in range(start, n + 1):
                go(picks + [i], i + 1)

        go([], 1)
        return ans
