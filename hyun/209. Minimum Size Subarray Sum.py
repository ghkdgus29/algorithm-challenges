class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        ans = 10**6
        total = 0
        
        for right in range(len(nums)):
            total += nums[right]
            while total >= target and left <= right:
                ans = min(ans, right-left+1)
                total -= nums[left]
                left += 1
        
        return ans if ans != 10**6 else 0 
                

            
        
