class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        d = [-10^5] * len(nums)
        d[0] = nums[0]
        for i in range(1, len(nums)):
            d[i] = max(nums[i], d[i-1] + nums[i])
        
        return max(d)
