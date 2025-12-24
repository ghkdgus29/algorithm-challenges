class Solution:
  def calculate(self, s: str) -> int:
    sign = 1 
    ans = 0 
    num = 0
    sign_stack = [sign]

    for ch in s:
        if ch.isdigit():
            num = num * 10 + int(ch)
        elif ch == '(':
           sign_stack.append(sign)
        elif ch == ')':
           sign_stack.pop()
        elif ch == '-' or ch == '+':
            ans += num * sign
            sign = sign_stack[-1] * (1 if ch == '+' else -1)
            num = 0
    
    return ans + sign * num 
