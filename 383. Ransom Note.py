class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        note = collections.Counter(ransomNote)
        magazine = collections.Counter(magazine)

        for k, v in note.items(): 
            if magazine[k] < v:
                return False
        
        return True
