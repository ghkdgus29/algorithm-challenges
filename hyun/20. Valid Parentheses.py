class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        dic = {")": "(", "]": "[", "}": "{"}
        for ch in s:
            if ch in ["(", "[", "{"]:
                stack.append(ch)
            else:
                if not stack or stack[-1] != dic[ch]:
                    return False
                stack.pop()
        return not stack
