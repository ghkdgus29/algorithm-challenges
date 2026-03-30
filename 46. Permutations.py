class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        ans = []
        def go(picks:list, has:set):
            if len(picks) == len(nums):
                ans.append(picks[:])
                return 
            for num in nums: 
                if num not in has:
                    picks.append(num)
                    has.add(num)
                    go(picks, has)
                    picks.pop()
                    has.remove(num)
        
        go([], set())
        return ans 
