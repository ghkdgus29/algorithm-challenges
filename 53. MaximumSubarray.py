class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        d = [nums[0]]
        for num in nums[1:]:
            d.append(max(d[-1] + num, num))
        return max(d)
