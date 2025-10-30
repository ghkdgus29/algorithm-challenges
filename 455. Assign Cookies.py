class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        ans = 0

        for greedy in g[::-1]:
            if s and greedy <= s[-1]:
                ans += 1
                s.pop()
        return ans 

        
        
