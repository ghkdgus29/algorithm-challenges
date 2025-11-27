class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        if len(s.split()) != len(pattern):
            return False
        swap = {}
        checker = set()
        for idx, word in enumerate(s.split()):
            if word not in swap:
                if pattern[idx] in checker: 
                    return False 

                swap[word] = pattern[idx]
                checker.add(pattern[idx])
            
            if swap[word] != pattern[idx]:
                return False
        return True



