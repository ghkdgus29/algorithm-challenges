class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        ans = []

        def go(picks, idx):
            if idx >= len(nums):
                ans.append(picks)
                return
            go(picks, idx + 1)
            go(picks + [nums[idx]], idx + 1)

        go([], 0)
        return ans
