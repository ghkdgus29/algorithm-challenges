class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if not nums:
            return []
        ans = []
        cur = [str(nums[0])]
        for i in range(1, len(nums)):
            if nums[i-1] + 1 != nums[i]:
                if len(cur) == 1:
                    ans.append(cur[0])
                else:
                    ans.append(f"{cur[0]}->{cur[-1]}")
                cur = []
            cur.append(str(nums[i]))
        
        if cur: 
            if len(cur) == 1:
                ans.append(cur[0])
            else:
                ans.append(f"{cur[0]}->{cur[-1]}")

        return ans 

            

            


