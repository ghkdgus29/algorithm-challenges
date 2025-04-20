class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        ans = []
        for left in range(len(nums)-1):
            if left > 0 and nums[left] == nums[left-1]:
                continue
            
            cur = left + 1
            right = len(nums) - 1
            while cur < right:
                total = nums[left] + nums[cur] + nums[right]
                if total == 0:
                    ans.append([nums[left], nums[cur], nums[right]])
                    cur += 1
                    while nums[cur] == nums[cur-1] and cur < right:
                        cur += 1
                    
                elif total > 0:
                    right -= 1
                else:
                    cur += 1
                
        return ans