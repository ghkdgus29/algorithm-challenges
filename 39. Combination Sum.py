class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = []

        def go(picks, idx, total):
            if total == target:
                ans.append(picks[:])
                return
            if total > target:
                return

            for i in range(idx, len(candidates)):
                picks.append(candidates[i])
                go(picks, i, total + candidates[i])
                picks.pop()

        go([], 0, 0)
        return ans
