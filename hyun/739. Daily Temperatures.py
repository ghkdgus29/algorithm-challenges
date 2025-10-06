class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # write index diff when meet bigger value
        stack = []
        ans = [0] * len(temperatures)
        for idx, t in enumerate(temperatures):
            while stack and stack[-1][0] < t:
                _, prev_idx = stack.pop()
                ans[prev_idx] = idx - prev_idx
            stack.append((t, idx))
        return ans
