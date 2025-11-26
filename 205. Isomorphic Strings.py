class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        s_checker = {}
        t_checker = {}
        s_idx = 0 
        t_idx = 0
        for i in range(len(s)):
            if s[i] not in s_checker:
                s_checker[s[i]] = s_idx
                s_idx += 1
            
            if t[i] not in t_checker:
                t_checker[t[i]] = t_idx
                t_idx += 1
            
            if s_checker[s[i]] != t_checker[t[i]]:
                return False
        
        return True
