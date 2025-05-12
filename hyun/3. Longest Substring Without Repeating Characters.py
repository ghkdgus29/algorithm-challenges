class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        ans = 0
        left = right = 0 
        contain = set()
        
        for right in range(len(s)):
            while s[right] in contain:
                contain.remove(s[left])
                left += 1
            contain.add(s[right])
            ans = max(ans, right-left+1)
        
        return ans
                 
