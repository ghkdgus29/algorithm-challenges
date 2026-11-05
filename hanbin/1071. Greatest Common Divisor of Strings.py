class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        length = len(str1)
        length2 = len(str2)

        answer = ""

        for k in range(1, length+1):
            candidate = str1[:k]
            
            if length % (k) == 0 and length2 % (k) == 0:
                if candidate * (length // (k)) == str1 and candidate * (length2 // (k)) == str2:
                    answer = candidate

        return answer
        