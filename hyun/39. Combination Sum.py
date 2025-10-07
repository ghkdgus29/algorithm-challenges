class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = set()

        def go(picks):
            if sum(picks) > target:
                return
            if sum(picks) == target:
                ans.add(tuple(sorted(picks)))
                return
            for num in candidates:
                go(picks + [num])

        go([])
        return list(ans)
