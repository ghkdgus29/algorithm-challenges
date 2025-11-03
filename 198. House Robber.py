class Solution:
    def rob(self, nums: List[int]) -> int:
        # 0 -> skip, 1 -> steal 
        d = [[0] * 2 for _ in range(len(nums))]
        d[0][1] = nums[0] 
        for i in range(1, len(nums)):
            d[i][1] = max(d[i][1], d[i-1][0] + nums[i])
            d[i][0] = max(d[i-1])
        
        return max(d[-1])
