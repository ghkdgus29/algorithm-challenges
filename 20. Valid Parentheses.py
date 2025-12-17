class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        checker =  {'(': ')', '{': '}', '[' :']'}
        open_p = set(checker.keys())
        for ch in s:
            if ch in open_p:
                stack.append(ch)
            else:
                if stack and ch == checker[stack[-1]]:
                    stack.pop()
                else:
                    return False
        if stack:
            return False
        return True
            
