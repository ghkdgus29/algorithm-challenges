class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        ans = []

        def go(picks, idx):
            if idx >= len(nums):
                ans.append(picks)
                return

            for num in nums:
                if num not in picks:
                    go(picks + [num], idx + 1)

        go([], 0)
        return ans
